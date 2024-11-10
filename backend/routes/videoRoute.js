import express from "express";
import { addComment, addVideo, deleteComment, deleteVideo, getOneVideo, getVideo, getVideoComment, likeOrDislikeVideo, searchVideo, suggetionVideo, updateComment, updateVideo } from "../controllers/videocontroller.js";
import upload from "../middleware/multer.js";
import { protect } from "../middleware/Verification.js";
import multer from 'multer';

const videoRouter = express.Router();



videoRouter.post("/add",protect, upload.fields([
    { name: 'thumbnail', maxCount: 1 }, 
    { name: 'video', maxCount: 1 }, 
  ]),addVideo)
  .put("/react/:id",protect,likeOrDislikeVideo)
  .get("/get",getVideo)
  .get("/get-one/:id",getOneVideo)
  .get("/get-suggestion-video",suggetionVideo)
  .put('/update/:videoId',protect,upload.fields([{ name: 'video', maxCount: 1 },
     { name: 'thumbnail', maxCount: 1 }]),
  updateVideo)
  .post("/add-comment/:id",protect,addComment)
  .get('/search',protect,searchVideo)
  .get("/get-comment/:id",protect,getVideoComment)
  .put("/update-comments/:commentId",protect,updateComment)
  .delete("/delete-comment/:commentId",protect,deleteComment)
  .delete('/delete-video/:videoId',protect,deleteVideo)
export default videoRouter;