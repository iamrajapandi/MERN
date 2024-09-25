require("dotenv").config();
const express = require("express");
// const cors=require("cors")
const app = express();
const dbcon=require('./config/db')
const User=require("./Routes/userRoutes")
const Projects=require("./Routes/projectRoutes")
app.use(express.json())

// app.use(cors());
  
const port = process.env.PORT || 7778;
app.use('/projects',Projects)
app.use('/user',User)
app.get("/", (req, res) => {
  res.json({ message: "Welcome" }); 
});
app.listen(port, () => {
  console.log(`server is running in ${port}`);
});
