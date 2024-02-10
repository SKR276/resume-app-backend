const express=require("express")
const resumeModel=require("../models/resumeModel")

const router=express.Router()

router.post("/resume-Entry",async(req,res)=>{
    let data=req.body
    let resume=new resumeModel(data)
    let resul=await resume.save()
    res.json({
        status:"success"
    })
})

module.exports=router