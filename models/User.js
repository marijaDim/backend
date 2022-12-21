import mongoose from "mongoose";

mongoose.set("strictQuery", false);
const UserModel=new mongoose.Schema({

    password:{

        type: String,
    },
    email:{

        type:String,unique:true
    }
})

const User=mongoose.model("userprojects",UserModel);

export default User;