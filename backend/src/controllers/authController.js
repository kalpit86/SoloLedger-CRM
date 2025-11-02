import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

class AuthController{
   async registerUser(req,res){
        console.log("Register request received:", req.body);
        const {username,email,password} = req.body;
          if(!username || !email || !password){
             console.log("Missing credentials:", {username, email, password: !!password});
             return res.status(400).json({
                 message: "Please provide all Credentials!!"
             })
          }

        try {
            const hashedPass = await bcrypt.hash(password,6)
            console.log("Password hashed successfully");

            const newUser = await userModel.create({
                name:username,
                email:email,
                password:hashedPass
            })
            console.log("User created in DB:", newUser._id);

            const authToken = jwt.sign({userid : newUser._id},process.env.JWT_SECRET)
            res.setHeader("Authorization",authToken)
            return res.status(200).json({
                message : "User Created Successfully",
                details : {
                    id: newUser._id,
                    name: newUser.name,
                    email: newUser.email
                }
            })
    
        } catch (error) {
            console.error("Error during registration:", error);
            if (error.code === 11000) {
                return res.status(400).json({
                    message: "Email already exists"
                })
            }
            return res.status(500).json({
                message: "Internal server error"
            })
        }
    }

    async loginUser(req,res){
        const {email,password} = req.body;
        if(!email || !password){
            console.log("Missing credentials:", {email, password: !!password});
             return res.status(400).json({
                 message: "Please provide all Credentials!!"
             })
        }

        const user = await userModel.findOne({email:email})

        if(!user) return res.status(400).json({message: "No user found!!!"})

        try{
            const isMatch = await bcrypt.compare(password,user.password);
            if(isMatch){
                const authToken = jwt.sign({userid : user._id},process.env.JWT_SECRET)
                res.setHeader("Authorization",authToken)
                return res.status(200).json({
                    message : "LoggedIn Successfully",
                    details : {
                        id: user._id,
                        name: user.name,
                        email: user.email
                    }
                })
            }
            else{
                return res.status(400).json({
                    message : "Authorization Failed No User Exists!!"
                })
            }
        }
        catch(err){
            console.log(err)
        }
    }
}
export const authController = new AuthController();


