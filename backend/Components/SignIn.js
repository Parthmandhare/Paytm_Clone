const { Router } = require("express");

const SignInUser = require("../Middlewares/SignInAuth");
const {user} = require("../DB/db");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const router = Router();

router.get("/", SignInUser, (req, res) => {

    const userInput = {
        Email: req.body.Email,
        Password: req.body.Password,
    }

    user.findOne({Email : userInput.Email}).then((docs) => {
        
        if(docs.Password == userInput.Password){
            const token = jwt.sign({Email : userInput.Email}, process.env.JWT_SECRET_KEY);
            if(token){
                res.send("Logged In Success" + token);
            }else{
                res.send("Something went wrong while creating token!");
            }
            
        }else{
            // res.send("Incorrect Credential")
            res.send("Incorrect Credential");
            
        }
        
    }).catch((err) => {
        res.send("User don't exists !")
    })

})

module.exports = router;