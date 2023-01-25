const express=require('express');
const router=express.Router();
const userController=require('../controller/user.cont');
const authenticate = require('../middlewares/AuthGuard');


// router.put('/updateUser' ,userController.updateUser)
router.get('/getAllUsers' ,userController.getAllUser)
router.get('/getUser',authenticate,userController.getUser)

// router.delete('/deleteUserByUserName/:username',userController.deleteUserByUserName) 
router.delete('/allUserDelete',userController.allUserDelete)





module.exports=router
