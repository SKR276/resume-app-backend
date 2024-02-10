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

router.get("/viewall",async(req,res)=>{
    let result=await resumeModel.find()
    .populate(
        "userId","mobileNo address -_id"
    )
    .exec()
    res.json(result)
})

module.exports=router