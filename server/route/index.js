const express=require('express')
const router=express.Router()

const user =require('./user') 
const notes  =require('./notes')
const signup=require('./signup')
const login=require('./login')




router.use('/user',user);
router.use('/notes',notes)
router.use('/signup',signup)
router.use('/login',login)




module.exports=router