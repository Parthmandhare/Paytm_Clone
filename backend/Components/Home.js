const { Router } = require("express");
const Auth = require("../Middlewares/Auth");

const router = Router();

router.get("/", Auth, (req, res) => {
    res.send("Home");
})

module.exports = router;