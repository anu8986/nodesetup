require("dotenv").config(); // loads .env variables
const cors = require("cors");
const helmet = require("helmet");
const cookieparser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
// const { default: helmet } = require("helmet");

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(cookieparser());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('mongo db is connected')
}).catch((err)=>{
    console.log(err.message)
});


app.get("/", (req, res) => {
  res.json({ message: "hello from the server" });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("processing....");
});
