const { Router } = require("express");
const Signup = require("../Components/Signup")
const SignIn = require("../Components/SignIn")
const Home = require("../Components/Home")
const UpdateInfo = require("../Components/UpdateInfo")
const FindUser = require("../Components/FindUser")
const Account = require("../Components/Account")

const router = Router();

router.use("/Signup", Signup);
router.use("/SignIn", SignIn);
router.use("/UpdateInfo", UpdateInfo);
router.use("/FindUser", FindUser);
router.use("/account", Account);
router.use("/", Home);



module.exports = router;

