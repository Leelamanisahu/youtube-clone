import cloudinary from "../middleware/cloudinaryConfig.js";
import Channel from "../models/channel.js";
import User from "../models/user.js";
import CustomError from "../utils/CustomeError.js";


export const createChannel = async(req,res,next)=>{
    try {
        const file = req.file;
        const {channelName,description} = req.body;
        const owner = req.user.id;
        const isExist = await Channel.findOne({channelName});
        if(isExist){
            return next(new CustomError("Channel name is already taken",401));
        }
        const channelBannerResult = await cloudinary.uploader.upload(file.path,{
          folder:"yt-image",
          resource_type:"image"
      }) 
        const channelBanner = channelBannerResult.secure_url;
       const channel = new Channel({
        channelName,owner,channelBanner,description
       })
       await channel.save();
       const user = await User.findByIdAndUpdate(owner,{$set:{channels:channel._id}});
       return res.status(200).json(channel);
    } catch (error) {
        next(error);
    }
}

export const updateChannel = async (req, res, next) => {
    try {
      const file = req.file; // Uploaded file
      const userId = req.user.id; // Authenticated user
      const id = req.params.id; // Channel ID from URL
      const { channelName, description } = req.body; // Form data
  
      // 1. Check if the channel exists
      const isExist = await Channel.findById(id);
      if (!isExist) {
        return next(new CustomError("Channel not found", 404));
      }
  
      // 2. Ensure the current user is the owner of the channel
      if (isExist.owner.toString() !== userId) {
        return next(new CustomError("You are not authorized to update this channel", 403));
      }
  
      // 3. Check if a channel with the same name exists (and it's not the same as the current one)
      if (channelName) {
        const findAvailableName = await Channel.findOne({ channelName });
        if (findAvailableName && findAvailableName._id.toString() !== id) {
          return next(new CustomError("Channel name is already taken", 400));
        }
        // Update channel name if valid
        isExist.channelName = channelName;
      }
  
      // 4. If a file is uploaded, update the channel banner
      if (file) {
        isExist.channelBanner = `/images/${file.filename}`;
      }
  
      // 5. Update the channel description
      if (description) {
        isExist.description = description;
      }
  
      // 6. Save the changes
      await isExist.save();
  
      // 7. Return the updated channel information
      return res.status(200).json(isExist);
  
    } catch (error) {
      // Pass any errors to the error handler middleware
      next(error);
    }
  };


export const getMyChannel = async(req,res,next)=>{
    try {
        const userId = req.user.id;
        const myChannel = await Channel.find({owner:userId}).populate('videos');
        return res.status(200).json(myChannel);
    } catch (error) {
        next(error);
    }
} 
  

export const findChannel = async(req,res,next)=>{
    try {
      const channelId = req.params.id;
      let channel;
      if(channelId){
        channel = await Channel.findById(channelId).populate('videos').populate('owner','username');
      }else{
        channel = await Channel.find({}).populate('videos').populate('owner','username');
      }
        return res.status(200).json(channel);
    } catch (error) {
        next(error);
    }
}

export const deleteChannel = async(req,res,next)=>{
    try {
        const channelId = req.params.id;
        const userId = req.user.id;
        const isExist = await Channel.findById(channelId);
        if(!isExist){
            return next(new CustomError("channel not found",404));
        }
        if(isExist.owner != userId){
            return next(new CustomError("you are not authorized",401));
        }
        return res.status(200).json({message:"channel is deleted"});
    } catch (error) {
        next(error);
    }
}




