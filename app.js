const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const userRoute=require("./controllers/usersRouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://sreelakshmi:Skr1234@cluster0.p9kjpl1.mongodb.net/resumeDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)

app.use("/api/resume",userRoute)

app.listen(3001,()=>{
    console.log("server running")
})
