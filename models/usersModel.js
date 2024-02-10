const mongoose=require("mongoose")
const userSchema=new mongoose.Schema(
    {
        name:String,
        address:String,
        mobileNo:String,
        qualification:String,
        email:String,
        password:String
    }
)

module.exports=mongoose.model("resumes",userSchema)