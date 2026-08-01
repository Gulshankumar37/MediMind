import mongoose from 'mongoose'

const reportSchema = new mongoose.Schema(
    {
        user:{
            required:true,
            ref:"User",
            type:mongoose.Schema.Types.ObjectId
        },
        fileName:{
            type:String,
            required:true
        },
        originalName:{
            type:String,
            required:true,
        },
        filePath:{
            type:String,
            required:true
        },
        fileSize:{
            type:Number,
            required:true
        },
        mimeType:{
            type:String,
            default:"",
        },
        aiSummary:{
            type:String,
            default:"",
        },
        reportText: {
            type: String,
            default: "",
        },
    },
    {
        timestamps:true
    }
)
const Report = mongoose.model("Report",reportSchema)
export default Report;