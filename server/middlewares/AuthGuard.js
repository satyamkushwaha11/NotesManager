const jwt=require('jsonwebtoken')
require('dotenv').config()

const authenticate=(req,res,next)=>{
    const token=req.header('jwtToken');
    if (!token){
        return res.status(401).send({error:"pls authenticate using a valid token"})
    }
    try{
        const data=jwt.verify(token,process.env.SECRETE_KEY)
        req.user=data
    }catch{
        res.send({status:401,error:"pls.. authenticate using a valid token"})
    }
    next()
}
module.exports=authenticate