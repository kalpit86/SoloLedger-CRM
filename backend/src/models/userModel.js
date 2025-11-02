import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type: String , required:[true,"Username is Required!!"]},
    email:{type: String , required:[true,"E-mail is Required!!"],unique:true},
    password:{type:String, required:[true,"Password is Required!!"]},
},{
        timestamps:true
})

const userModel = mongoose.model("userModel",userSchema);

export default userModel;