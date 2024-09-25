const express = require("express");
const router = express.Router();
const users = require("../models/userModels");

router.get("/all", async (req, res) => {
  try {
    const fetching = await users.find();
    res.status(200).json(fetching);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/add", async (req, res) => {
  try {
    const newUser = new users(req.body);
    const { name, about, image } = newUser;
    if (!name || !about || !image) {
      res.status(400).json({ message: "Something is missing" });
    }
    const savedate = await newUser.save();
    res.status(200).json(savedate);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/edit/:id", async (req, res) => {
  try {
    const userid = req.params.id;
    const currentid = await users.findOne({ _id: id });
    if (!currentid) {
        res.status(400).json({message:"id not found"})
    }
    const updateuser=await users.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).json(updateuser)
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports=router
