import mongoose from 'mongoose';
const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  video:{
    type:String,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  channelId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Channel', // Reference to Channel model
    required: true,
  },
  uploader: {
    type: mongoose.Schema.ObjectId,
    ref: 'User', // Reference to User model (the uploader)
    required: true,
  },
  views: {
    type: Number,
    default: 0,
  },
  genere:[{
    type:String,
  }],
  duration:{
    type:Number
  },
  likes: [{
    type: mongoose.Schema.ObjectId,
  }],
  dislikes: [{
    type: mongoose.Schema.ObjectId,
  }],
  uploadDate: {
    type: Date,
    required: true,
  },
}, { timestamps: true });

const Video = mongoose.model('Video', videoSchema);

export default Video;
