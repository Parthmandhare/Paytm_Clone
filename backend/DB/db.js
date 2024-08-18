const mongoose = require("mongoose");

const db = mongoose.connect("mongodb://localhost:27017/Paytm").then(() => {
    console.log("Connected Successfully");
}).catch((err) => console.log(err)
);

const Userschema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    Email: String,
    Password: String
});

const Accountschema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    balance: Number
})

const user = mongoose.model("Users", Userschema);

const account = mongoose.model("Account", Accountschema);

module.exports = {user, account};