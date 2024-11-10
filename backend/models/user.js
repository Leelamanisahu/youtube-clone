import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
 email: {
    type: String,
    required: true,
    unique: true,
   
    validate: {
      validator: function (email) {
      
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    
  },
  channels: {
    type: mongoose.Schema.ObjectId,
    ref: 'Channel', 
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
