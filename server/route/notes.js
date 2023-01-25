const express=require('express');

const router=express.Router();
const notes=require('../controller/notes.cont')
const authenticate=require('../middlewares/AuthGuard')

router.get('/getAllNotes',authenticate,notes.getAllNotes)
router.post('/addNote',authenticate,notes.addNote)
router.put('/updateNote/:id',authenticate,notes.updateNote)
router.delete('/deleteNote/:id',authenticate,notes.deleteNote)



module.exports=router
