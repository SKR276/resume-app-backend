const mongoose=require("mongoose")
const resumeSchema=new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"resumes"
        },
        fullName:{
            type:String,
            required:true
        },
        careerObjective:{
            type:String,
            required:true
        },
        skills:{
            type:String,
            required:true
        },
        education:{
            type:String,
            required:true
        },
        certifications:{
            type:String,
            required:true
        }
    }
)

module.exports=mongoose.model("resumeEntry",resumeSchema)