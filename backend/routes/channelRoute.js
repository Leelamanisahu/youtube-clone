import express from 'express';
import { protect } from '../middleware/Verification.js';
import { createChannel, deleteChannel, findChannel, getMyChannel, updateChannel } from '../controllers/channelcontroller.js';
import upload from '../middleware/multer.js';

const channelRouter = express.Router();


channelRouter.post("/create",protect, upload.single('file'), createChannel)
.patch("/update/:id",protect,upload.single('file'), updateChannel)
.get("/mychannels",protect,getMyChannel)
.get("/get/:id?",protect,findChannel)
.delete("/delete/:id",protect,deleteChannel);

export default channelRouter;
