import express from "express";
import { addComment, addVideo, deleteComment, deleteVideo, getOneVideo, getVideo, getVideoComment, likeOrDislikeVideo, suggetionVideo, updateVideo } from "../controllers/videocontroller.js";
import upload from "../middleware/multer.js";
import { protect } from "../middleware/Verification.js";
const videoRouter = express.Router();


videoRouter.post("/add",protect, upload.fields([
    { name: 'thumbnail', maxCount: 1 }, 
    { name: 'video', maxCount: 1 }, 
  ]),addVideo)
  .put("/react/:id",protect,likeOrDislikeVideo)
  .get("/get",getVideo)
  .get("/get-one/:id",getOneVideo)
  .get("/get-suggestion-video",suggetionVideo)
  .patch('/update-video/:videoId',protect,updateVideo)
  .post("/add-comment/:id",protect,addComment)
  .get("/get-comment/:id",protect,getVideoComment)
  .delete("/delete-comment/:id",protect,deleteComment)
  .delete('/delete-video/:videoId',protect,deleteVideo)


export default videoRouter;