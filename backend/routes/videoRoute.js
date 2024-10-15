import express from "express";
import { addComment, addVideo, deleteComment, getVideo, likeOrDislikeVideo } from "../controllers/videocontroller.js";
import upload from "../middleware/multer.js";
import { protect } from "../middleware/Verification.js";
const videoRouter = express.Router();


videoRouter.post("/add",protect, upload.fields([
    { name: 'thumbnail', maxCount: 1 }, 
    { name: 'video', maxCount: 1 }, 
  ]),addVideo)
  .put("/react/:id",protect,likeOrDislikeVideo)
  .get("/get",getVideo)
  .post("/add-comment/:id",protect,addComment)
  .delete("/delete-comment/:id",protect,deleteComment)


export default videoRouter;