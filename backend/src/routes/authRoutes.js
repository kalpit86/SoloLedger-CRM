import Router from "express";
import { authController } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post('/register',authController.registerUser.bind(authController))

authRouter.post('/login',authController.loginUser.bind(authController))


export default authRouter;