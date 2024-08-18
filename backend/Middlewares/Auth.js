const jwt = require("jsonwebtoken");
require("dotenv").config();

function Auth(req,res,next){
    let token = req.headers['authorization'];

    if(token){
        token = token.split(' ')[1];
    }

    console.log("Your Toke is: " + token);
    

    try {
        const verify = jwt.verify(token, process.env.JWT_SECRET_KEY); 

        req.Email = verify.Email;
        
        next();
        
    } catch (error) {
        res.status(403).json({ msg: "Session has expired, please login again." });
        
    }
    

    // if(verify.success){
    //     next();
    // }else{
    //     res.status(403);
    // }
    
}

module.exports = Auth;