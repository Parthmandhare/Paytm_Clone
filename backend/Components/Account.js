const { Router } = require("express");
const Auth = require("../Middlewares/Auth");
const { account, user } = require("../DB/db");
const { default: mongoose } = require("mongoose");

const router = Router();

router.get("/balance", Auth, async(req,res) =>  {
    const userEmail = req.Email ;

    const userID = await user.findOne({Email: userEmail});
    

    await account.findOne({userId: userID._id}).then((doc) => {

        const Userbalance = doc.balance;
        res.send("Your balance is " + Userbalance);

    }).catch((e) => {
        res.send("Something went wrong!");
    })
})

router.put("/transfer", Auth, async(req, res) => {

 
    const {to, amount} = req.body;

    const userEmail = req.Email;

    const isThere = await user.findOne({_id: to});

    console.log(isThere);
    

    if(isThere == null) {return res.send("User not found!")}
    

    let userID;

    await user.findOne({Email: userEmail}).then(async(doc) => {
         userID = doc._id;

         await account.findOne({userId: userID}).then(async (acc) => {
            if(!acc || acc.balance < amount ){

                return res.status(404).json({msg: "Insuffiecent Funds"})
            }
        })
    })

    try {

        await account.findOneAndUpdate({userId: to}, {$inc: {balance: +amount}}).then((doc) =>{
            console.log(doc);
        }).catch((e) => {
           
        })

        await account.findOneAndUpdate({userId: userID}, {$inc: {balance: -amount}}).then((doc) =>{
            console.log(doc);
        }).catch((e) => {
            console.log(e);
            
        })

        res.send("Tranction completed!")

    } catch (error) {
        req.send("DF"+error);
    }
    
    // .then(async() => {

    //     await account.findOneAndUpdate({userId: userID}, {inc: {balance: -amount}})

    //     await account.findOneAndUpdate({userId: to}, {inc: {balance: amount}})

    //     res.send("Tranction completed!")

    // }).then(() => {
    //     return res.status(403).json({msg: "Account Deatils invalid"})
    // })
})

module.exports = router;