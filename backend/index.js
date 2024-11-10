import express from 'express';
import mongoose from 'mongoose';
import ErrorHandler from './utils/ErrorHandler.js';
import userRouter from './routes/userRoute.js';
import channelRouter from './routes/channelRoute.js';
import CustomError from './utils/CustomeError.js';
import videoRouter from './routes/videoRoute.js';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',  
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))

const connectToDb = ()=>{
    mongoose.connect(process.env.MONGODBURI)
    .then(()=>console.log("db is connected"))
    .catch((err)=>console.log(err));
} 


app.use("/youtube-clone/user",userRouter)
app.use("/youtube-clone/channel",channelRouter)
app.use("/youtube-clone/video",videoRouter)


app.all("*", (req, res, next) => {
    const err = new CustomError(`Can't find ${req.originalUrl} on the server`, 404);
    next(err);
  });

app.use(ErrorHandler);

app.listen(5001,()=>{
    console.log(`Server is running on the port 5001`)
    connectToDb();
})
