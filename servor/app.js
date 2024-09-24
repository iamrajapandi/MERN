

require("dotenv").config();
const express = require("express");
const app = express();
const dbcon=require('./config/db')
const Projects=require("./Routes/projectRoutes")
app.use(express.json())

const port = process.env.PORT || 7778;
app.use('/projects',Projects)
app.get("/", (req, res) => {
  res.json({ message: "Welcome" }); 
});
app.listen(port, () => {
  console.log(`server is running in ${port}`);
});
