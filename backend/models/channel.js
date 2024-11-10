import mongoose from 'mongoose';

const channelSchema = new mongoose.Schema({
  channelName: {
    type: String,
    required: true,
    unique:true,
  },
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User', 
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  channelBanner: {
    type: String,
    // required: true,
  },
  subscribers: {
    type: Number,
    default: 0,
  },
  videos: [{
    type: String,
    ref: 'Video', 
  }],
}, { timestamps: true });

const Channel = mongoose.model('Channel', channelSchema);

export default Channel;
