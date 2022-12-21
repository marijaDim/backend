import mongoose from "mongoose";

const url = "mongodb+srv://MarijaProject:a1s2d3f4g5h6j7k8i9@atlascluster.qwpqbug.mongodb.net/?retryWrites=true&w=majority"
const connection =  async ()=>{

    try{
        const conn = await mongoose.connect(url,{
            //must add in order to not get any error masseges:
            useUnifiedTopology:true,
            useNewUrlParser: true
        })
        console.log(`mongo database is connected!!! ${conn.connection.host} `)
    }catch(error){
        console.error(`Error: ${error} `)
        process.exit(1) //passing 1 - will exit the proccess with error
    }

}


export default connection;

