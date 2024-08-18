const { Router } = require("express");

const validateUser = require("../Middlewares/SignupAuth");
const user = require("../DB/db");
const Auth = require("../Middlewares/Auth");

const router = Router();

function addFeild({inputKey: inputID}){
    if(inputID){
        console.log("Go ahead!");
    } else{
        console.log(inputID);
        
    }
}

router.put("/", Auth,  async(req, res) => {

    let Add = {};

    if(req.body.FirstName){
        Add = {
            FirstName: req.body.FirstName
        }
    }
    if(req.body.LastName){
        Add = {
            LastName: req.body.LastName
        }
    }
    if(req.body.Password){
        Add = {
            Password: req.body.Password
        }
    }

        const hello = await user.findOneAndUpdate({Email: req.Email}, Add)

        if(hello){
            res.send("Updated" + hello);
        }else{
            res.send("Inputes are invaild");
        }


})

module.exports = router;