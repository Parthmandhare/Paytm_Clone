const { Router } = require("express");
const {user} = require("../DB/db");
const Auth = require("../Middlewares/Auth");


const router = Router();

router.get("/", Auth, (req, res) => {

    const query = req.query.Filter;

    user.find({ $or: [{FirstName: query}, {LastName: query}]}).then((doc) => {
        res.send(doc);
    }).catch(() => {
        res.send("User not found");
    } )

 } )

 module.exports = router;