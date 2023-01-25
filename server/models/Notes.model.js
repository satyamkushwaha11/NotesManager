
const mongoose=require('mongoose')
const userModel = require('./user.model')
// const {Schema}=mongoose.Mongoose
 
const NoteSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    title:{
        type:String,
        required:true,
        default:"Untitled"
    },
    description:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        default:"General"
    
    },
    date:{
        type:Date,
        default:Date.now    
    }
})

module.exports=mongoose.model("Notes",NoteSchema)