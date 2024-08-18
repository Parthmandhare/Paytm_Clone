const bodyParser = require("body-parser");
const express = require("express");
const Routes = require("./Routes/index")
const cors = require("cors")


const app = express();

app.use(express.json())

app.use(cors())

app.use("/api/v1", Routes)


app.listen(5000);