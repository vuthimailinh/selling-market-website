import { Router } from "express";
import user from "../controller/User.controller";
//import { json } from "body-parser";

const userRouter = Router();
//userRouter.use((json));

userRouter.post("/sign-up", user.sign_up);
userRouter.post("/login", user.login);

export default userRouter;
