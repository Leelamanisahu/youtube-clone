import express from "express";
import { getDetails, login, register } from "../controllers/usercontroller.js";
import { protect } from "../middleware/Verification.js";

const userRouter = express.Router();


userRouter.post("/register",register)
.post("/login",login)
.get("/user-info",protect,getDetails)


export default userRouter;