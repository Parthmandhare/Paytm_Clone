const { Router } = require("express");

const validateUser = require("../Middlewares/SignupAuth");
const {user , account} = require("../DB/db");
const { number } = require("zod");
const jwt = require("jsonwebtoken");

const router = Router()

router.post("/", validateUser, async(req, res) => {

    const InputUser = {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        Password: req.body.Password,
    }

    try {
        console.log(InputUser);

        const ifUserExists = await user.findOne({Email: InputUser.Email});

        console.log("Yes" + ifUserExists);

        if(ifUserExists){
            return res.status(403).json({msg: "user already exists"});
        }
        
        
        const newUser = await user.create(InputUser);

        let userToken;

        const token = jwt.sign({Email : InputUser.Email}, process.env.JWT_SECRET_KEY);
            if(token){
                userToken = token
            }else{
                res.send("Something went wrong while creating token!");
            }

        const userId = newUser._id;

        await account.create({
            userId,
            balance: 1 + Math.random()*1000
        })

        res.json({
            token: userToken,
            msg: "Sign-up successfully"
        });

    } catch (error) {
        res.send("Something went wrong! " + error);
    }
})

module.exports = router;