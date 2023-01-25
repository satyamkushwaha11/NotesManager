const express=require('express');
const router=express.Router();

const auth=require('../controller/auth.cont')

router.post('/',auth.signup)


module.exports=router