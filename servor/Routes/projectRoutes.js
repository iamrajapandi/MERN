const express=require('express')
const router=express.Router();
const projects=require('../models/projectModel')

router.get('/all',async(req,res)=>{
    try {
        const fetchprojects=await projects.find()
        res.status(200).json(fetchprojects)
    } catch (error) {
        res.status(400).json(error)
        
    }
})

// router.post('/add',async(req,res)=>{
//     try {
        
//     } catch (error) {
        
//     }
// })
module.exports = router