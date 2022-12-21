import mongoose from "mongoose";


const connection=async()=>{

    try{
        mongoose.connect("mongodb://localhost:27017",{ //link to our base
        useNewUrlParser:true,
        useUnifiedTopology:true,

    })
}
    catch(error){
console.log(error.message);
    }
}


export default connection;