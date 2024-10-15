import mongoose, { model, Schema } from "mongoose";

const commentSchema = new mongoose.Schema({
    userId: {
      type: Schema.ObjectId,
      ref: 'User', // Assuming comments reference the User model
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },{ timestamps: true });

  const Comment = mongoose.model("Comment",commentSchema);
  export default Comment;