const Joi = require('joi')
const User = require('../models/user.model')
const mongoose = require('mongoose')

const allUserDelete=async (req,res)=>{
    try {

        const query = await User.find( {})

        if (query.length==0) {
            res.send({ 
                massage: 'no data to show',
                status:201
         })
        }
        else {
            await User.deleteMany()

            res.status(200).send({
                message: "deleted success fully",
                status: 200,
            });

        }
    }
    catch (err) {
        // console.log("Failed to create new model", err);
        return res.status(500).send({
            message: err.message || "Internal Server Error!",
            code: 500,
        });
    }

}



const getAllUser=async (req,res)=>{
    try {

        const query = await User.find( {})

        if (query.length==0) {
            res.send({ 
                massage: 'no data to show',
                status:201
         })
        }
        else {
            res.status(200).send({
                message: query,
                status: 200,
            });

        }
    }
    catch (err) {
        return res.status(500).send({
            message: err.message || "Internal Server Error!",
            code: 500,
        });
    }

    
}

const getUser=async(req,res)=>{
    try{
       const userId=req.user.id;
       const user=await User.findById(userId).select("-password")
       res.send(user)

    } catch (err) {
        return res.status(500).send({
            message: err.message || "Internal Server Error!",
            code: 500,
        });
    }
}



module.exports = {
  
    // updateUser,
    // deleteUser,
    getAllUser,
    allUserDelete,
    getUser
}