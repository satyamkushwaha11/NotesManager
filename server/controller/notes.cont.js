const Joi = require('joi');
const Notes = require('../models/Notes.model')

const addNote = async (req, res) => {
    const schema = Joi.object({
        title: Joi.string().min(3).required(),
        description: Joi.string().required(),
        tag:Joi.string()
    })
    const validateSchema = schema.validate(req.body)
    var validateData;
    if (validateSchema.error) {
        res.status(400).send({ message: validateSchema.error.details[0].message })
    } else {
        validateData = validateSchema.value
    }
    const {title,description,tag}=req.body

    try {
    
           
        const note=new Notes({
            title,description,tag,user:req.user.id
        })
        const savedNotes=await note.save()
        return res.json(savedNotes)

    } catch (err) {
        return res.status(500).send({
            message: err.message || "Internal Server Error!",
            code: 500,
        });
    }
}


const getAllNotes = async (req, res) => {
    try {
        const allNotes = await Notes.find({ user: req.user.id })
        res.send({ Notes: allNotes, status: 200 })
    } catch (err) {
        return res.status(500).send({
            message: err.message || "Internal Server Error!",
            code: 500,
        });
    }
}

const updateNote=async(req,res)=>{

    const {title,description,tag}=req.body;
  
 
    let updatedNote={}
   
    if(title){updatedNote.title=title};
    if(description){updatedNote.description=description};
    if(tag){updatedNote.tag=tag};


    try{
        const note = await Notes.findById(req.params.id);
        
        if (!note){
            return res.status(400).send({massage:"your note is not found"})
        }
        if(note.user.toString()!==req.user.id){
            return res.status(400).send({massage:"Access denied"})
        }
        await Notes.findByIdAndUpdate(req.params.id,{$set:updatedNote},{$new:true})

        res.json({
            massage:"your note have been updated",
            oldNote:note,
            updated:await Notes.findById(req.params.id)
        })
    }catch (err) {
        return res.status(500).send({
            message: err.message || "Internal Server Error!",
            code: 500,
        });
    }
   

}

const deleteNote=async(req,res)=>{
    try{
    
        const note = await Notes.findById(req.params.id);
    
        if (!note){
            return res.status(400).send({massage:"your note is not found"})
        }
        if(note.user.toString()!==req.user.id){
            return res.status(400).send({massage:"Access denied"})
        }
        const deletedNote=await Notes.findByIdAndDelete(req.params.id)
        res.json({
            massage:"your note has been Deleted ",
            deletedNote
        })
    }catch (err) {
        return res.status(500).send({
            message: err.message || "Internal Server Error!",
            code: 500,
        });
    }

}

module.exports = {
    addNote,
    getAllNotes,
    updateNote,
    deleteNote
}