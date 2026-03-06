const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/onlineExam")
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.get("/", (req,res)=>{
    res.send("Online Exam Backend Running");
});

app.listen(5000, ()=>{
    console.log("Server running on port 5000");
});
const questionRoutes = require("./routes/questionRoutes");

app.use("/questions", questionRoutes);