import mongoose from "mongoose";
import Channel from "../models/channel.js";
import Comment from "../models/comment.js";
import Video from "../models/video.js";
import CustomError from "../utils/CustomeError.js";
import { getVideoDurationInSeconds } from 'get-video-duration';
import path from 'path';

export const addVideo = async (req, res, next) => {
    try {
      const uploader = req.user.id;
      const files = req.files;
      const { title, description, channelId,genere } = req.body;
       
      // Check if all required files are present
      if (!files || !files.video || !files.thumbnail) {
        return next(new CustomError('Both video and thumbnail files are required', 400));
      }
  
      // Check if channel exists
      const isExist = await Channel.findById(channelId);
      if (!isExist) {
        return next(new CustomError('Channel not found', 404));
      }
  
      // Check if video and thumbnail filenames exist
      const videoFile = files.video[0];
      const thumbnailFile = files.thumbnail[0];
      if (!videoFile || !thumbnailFile) {
        return next(new CustomError('Video or thumbnail file is missing', 400));
      }
  
      // Generate file paths
      const videoPath = `/videos/${videoFile.filename}`;
      const thumbnailPath = `/images/${thumbnailFile.filename}`;
  

      const absoluteVideoPath = path.resolve(`public${videoPath}`);

        // Get video duration
        const duration = await getVideoDurationInSeconds(absoluteVideoPath);
        console.log('Video Duration:', duration);
      // Log file paths to check if they're correct
    //   console.log('Video Path:', videoPath);
    //   console.log('Thumbnail Path:', thumbnailPath);
    const genereArr = genere.split(",");
  
      // Create new video object
      const video = new Video({
        title,
        description,
        channelId,
        uploader,
        duration,
        thumbnail: thumbnailPath,
        video: videoPath,
        uploadDate: new Date(),
        genere:genereArr,
      });

      // Handle the channel's videos array
      if (!Array.isArray(isExist.videos)) {
        isExist.videos = [];
      }
  
      // Push new video ID to the channel's videos array
      isExist.videos.push(video._id);
      // Save both the channel and video
      await isExist.save();
      await video.save();
  
      return res.status(200).json(video);
    } catch (error) {
        console.log(error)
      next(error);
    }
  };
  


export const getVideo = async(req,res,next)=>{
    try {
        // const videos = await Video.find({});

        const { genre } = req.query;

        const genereMatch = {
            $match: genre ? { genere: { $in: [genre] } } : {} // Filter by genre if provided
        };

        const pipeline = [
            {
                $lookup:{
                    from :"channels",
                    localField:"channelId",
                    foreignField:"_id",
                    as:"channelInfo"
                }
            },
            {
                $lookup:{
                    from :"users",
                    localField:"uploader",
                    foreignField:"_id",
                    as:"userInfo"
                }
            },
            {$unwind: "$channelInfo"},
            {$unwind:"$userInfo"},
            {
                $project:{
                    _id:1,
                    title: 1,
                    video:1,
                    thumbnail: 1,
                    description: 1,
                    channelName:'$channelInfo.channelName',
                    views:1,
                    duration:1,
                    genere:1,
                    likes:{$size:"$likes"}, 
                    dislikes:{$size:"$dislikes"},
                }
            }
        ]

        if(genre){
            pipeline.unshift(genereMatch);
        }
        const videos = await Video.aggregate(pipeline)
        return res.status(200).json(videos);
    } catch (error) {
        next(error)
    }
}


export const suggetionVideo = async(req, res, next) => {
    try {
        const { genre } = req.query;

        // Declare `genreArray` outside of the if block
        let genreArray = [];

        // Check if `genre` is provided and convert it to an array if it's not already an array
        if (genre) {
            genreArray = genre.split(",");
        }

        const genereMatch = {
            $match: genreArray.length > 0 ? { genere: { $in: genreArray } } : {} // Filter by genre array if provided
        };

        const pipeline = [
            {
                $lookup: {
                    from: "channels",
                    localField: "channelId",
                    foreignField: "_id",
                    as: "channelInfo"
                }
            },
            {
                $lookup: {
                    from: "users",
                    localField: "uploader",
                    foreignField: "_id",
                    as: "userInfo"
                }
            },
            { $unwind: "$channelInfo" },
            { $unwind: "$userInfo" },
            {
                $project: {
                    _id: 1,
                    title: 1,
                    video: 1,
                    thumbnail: 1,
                    description: 1,
                    channelName: '$channelInfo.channelName',
                    views: 1,
                    duration: 1,
                    genere: 1,
                    likes: { $size: "$likes" },
                    dislikes: { $size: "$dislikes" },
                }
            }
        ];

        // If `genre` is provided, add the `$match` stage at the start of the pipeline
        if (genreArray.length > 0) {
            pipeline.unshift(genereMatch);
        }

        const videos = await Video.aggregate(pipeline);
        return res.status(200).json(videos);

    } catch (error) {
        next(error);
    }
};


export const getOneVideo = async(req,res,next)=>{
    try {
        const videoId = new mongoose.Types.ObjectId(req.params.id)
        const pipeline = [
            {
                $match:{_id:videoId}
            },
            {
                $lookup:{
                    from :"channels",
                    localField:"channelId",
                    foreignField:"_id",
                    as:"channelInfo"
                }
            },
            {
                $lookup:{
                    from :"comments",
                    localField:"comments",
                    foreignField:"_id",
                    as:"commentInfo"
                }
            },
            {
                $lookup:{
                    from :"users",
                    localField:"uploader",
                    foreignField:"_id",
                    as:"userInfo"
                }
            },
            {$unwind: "$channelInfo"},
            {$unwind:"$userInfo"},
            {
                $project:{
                    _id:1,
                    title: 1,
                    video:1,
                    thumbnail: 1,
                    description: 1,
                    channelName:'$channelInfo.channelName',
                    views:1,
                    genere:1,
                    likes:1, 
                    dislikes:1,
                }
            }
        ]
        const videos = await Video.aggregate(pipeline)
        
        return res.status(200).json(videos);
    } catch (error) {
        next(error)
    }
}

export const likeOrDislikeVideo = async (req, res, next) => {
    const videoId = req.params.id; // Video being reacted to
    const { action } = req.query; // 'like' or 'dislike'
    const userId = req.user.id;

   

    try {
        // Find the video by ID
        const video = await Video.findById(videoId);
        if (!video) {
            return next(new CustomError('Video not found', 404));
        }

        if (action === 'like') {
            // Check if user already liked the video
            if (video.likes.includes(userId)) {
                // If they have liked it already, remove the like
                video.likes = video.likes.filter(id => id.toString() !== userId);
            } else {
                // If not, add the like
                video.likes.push(userId);
                // Remove from dislikes if they previously disliked it
                video.dislikes = video.dislikes.filter(id => id.toString() !== userId);
            }
        } else if (action === 'dislike') {
            // Check if user already disliked the video
            if (video.dislikes.includes(userId)) {
                // If they have disliked it already, remove the dislike
                video.dislikes = video.dislikes.filter(id => id.toString() !== userId);
            } else {
                // If not, add the dislike
                video.dislikes.push(userId);
                // Remove from likes if they previously liked it
                video.likes = video.likes.filter(id => id.toString() !== userId);
            }
        } else {
            return next(new CustomError('Invalid action. Use "like" or "dislike".', 400));
        }

        // Save the updated video document
        await video.save();

        // Respond with the updated counts
        return res.status(200).json({
            message: 'Reaction updated successfully',
            likesCount: video.likes.length,
            dislikesCount: video.dislikes.length,
        });
    } catch (error) {
        next(error); // Pass error to the error handling middleware
    }
};

export const addComment = async(req,res,next)=>{
    try {
        const userId = req.user.id;
        const {text} = req.body;
        const videoId = req.params.id;
        const comment = new Comment({
            userId,
            videoId,
            text
        })
        await comment.save();
     
        return res.status(200).json({message:"Comment has been added to the video",comment})
    } catch (error) {
        next(error);
    }
}

export const getVideoComment = async(req,res,next)=>{
    try {
    const videoId = new mongoose.Types.ObjectId(req.params.id);

    const pipeline = [
        {
           $match:{videoId:videoId}
        },
        {
            $lookup:{
                from:"users",
                localField:"userId",
                foreignField:"_id",
                as:'userInfo'
            }
        },
        {$unwind:"$userInfo"},
        {
            $project:{
                _id:1,
                username:"$userInfo.username",
                userId:"$userInfo._id",
                createdAt:1,
                text:1,
            }
        }
    ]
        const comments = await Comment.aggregate(pipeline);
        return res.status(200).json(comments);
    } catch (error) {
        next(error);   
    }
}

export const deleteComment = async(req,res,next)=>{
    try {
        const {commentId} = req.body;
        const videoId = req.params.id;
        const isExist = await Video.findById(videoId);
        console.log(isExist);
        if(!isExist){
            return next(new CustomError("Video not found",404));
        }
        const isComment = await Comment.findById(commentId);
        if(!isComment){
            return next(new CustomError("comment not found",404));
        }
        let comments = isExist.comments;
       let newComments = comments.filter((com)=>com._id != commentId);
       isExist.comments = newComments;
       isExist.save();
     const deletedComment=  await Comment.findByIdAndDelete(commentId);
       return res.status(200).json({messege:"comment delete succesfully",deletedComment})
    } catch (error) {
        next(error)
    }
}