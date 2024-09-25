

const express = require("express");
const router = express.Router();
const Projects = require("../models/projectModel");

router.get("/all", async (req, res) => {
  try {
    const fetchprojects = await Projects.find();
    res.status(200).json(fetchprojects);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/add", async (req, res) => {
  try {
    const newprojectdata =  new Projects(req.body);
    console.log(newprojectdata)
    const { title, desc } = newprojectdata;
    if (!title || !desc) {
      res.status(400).json({ message: "Title or Desc Required" });
    }
    const savedata = await newprojectdata.save();
    res.status(200).json(savedata);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.put("/edit/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const curentrec = await Projects.findOne({ _id: id });
    if (!curentrec) {
      res.status(400).json({ message: "Project not found" });
    }
    const updateproj = await Projects.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateproj);
  } catch (error) {}
});


router.delete('/delete/:id',async(req,res)=>{
  try {
    const id=req.params.id
    const curentrecord=await Projects.findOne({_id:id})
    if(!curentrecord)
    {
      res.status(400).json({message:"Project not found!"})
    }
    const delproject=await Projects.findByIdAndDelete(id)
    res.status(200).json({message:"Project Deleted!" })
  } catch (error) {
    res.status(500).json(error)
    
  }
})
module.exports = router;
