import express from "express";
import { addComment, addVideo, deleteComment, getOneVideo, getVideo, getVideoComment, likeOrDislikeVideo, suggetionVideo } from "../controllers/videocontroller.js";
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
  .post("/add-comment/:id",protect,addComment)
  .get("/get-comment/:id",protect,getVideoComment)
  .delete("/delete-comment/:id",protect,deleteComment)


export default videoRouter;