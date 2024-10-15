import Channel from "../models/channel.js";
import Comment from "../models/comment.js";
import Video from "../models/video.js";
import CustomError from "../utils/CustomeError.js";

export const addVideo = async (req, res, next) => {
    try {
      const uploader = req.user.id;
      const files = req.files;
      const { title, description, channelId } = req.body;
       
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
  
      // Log file paths to check if they're correct
    //   console.log('Video Path:', videoPath);
    //   console.log('Thumbnail Path:', thumbnailPath);
  
      // Create new video object
      const video = new Video({
        title,
        description,
        channelId,
        uploader,
        thumbnail: thumbnailPath,
        video: videoPath,
        uploadDate: new Date(),
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
                    likes:{$size:"$likes"},
                    dislikes:{$size:"$dislikes"},
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
            text
        })
        
        const video = await Video.findById(videoId);
        await comment.save();
        video.comments.push(comment);
        await video.save();
        return res.status(200).json({message:"Comment has been added to the video",comment})
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