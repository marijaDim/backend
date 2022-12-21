import express from "express";
import User from "../models/User.js";


const router=express.Router();


//INSERT INFO-POST METHOD
router.post("/users", async(req,res)=>{
    const {password,email}=req.body;


    const user=new User({
        password,email
    })

    //console.log(user);

    try{
        const savedUser=await user.save();
        res.status(201).json(savedUser);
    }catch(error){
        console.log(error.message)
    }
})


//SEARCH FOR USER-GET METHOD
router.get("/users", async (req, res) => {
    try {

        const users = await User.find({});

        res.json(users);
    }
    catch (err) {
        console.log(err.message);
    }
})

//SEARCH FOR USER BY ID- GET METHOD WITH PARAMS.ID
router.get("/users/:email", async (req, res) => {

    try {


        const email = req.params.email;
        const query = { email : email};


        const user = await User.findOne(query);
        if (user) {
            //console.log(user);
            res.status(200).json(user);
        }
        else{
            res.status(204).json({});
        }
    }
    catch (err) {
        console.log(err.message);
    }
})


//UPDATE USER INFO-PUT METHOD
router.put("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        if (user) {
            user.username = req.body.username || user.username;
            user.password = req.body.password || user.password;
            user.email = req.body.email || user.email;

            const updateUser = await user.save();
            res.status(200).json(updateUser);
        }
    } catch (err) {
        console.log(err.message);
    }
})


//DELETE USER - DELETE METHOD
router.delete("/users/:id", async (req, res) => {
    try {

        const id = req.params.id;
        const user = await User.findByIdAndDelete(id);
        res.status(200).json("Successfully deleted user");
        
    }
    catch (err) {
        console.log(err.message);
    }
})

export default router;