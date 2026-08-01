import Report from "../models/Report.js"
import extractTextFromPDF from "../services/pdfService.js";
import explainMedicalReport from "../services/aiServices.js";
import fs from 'fs'

export const uploadReport = async(req,res)=>{
    try{
        if(!req.file){
            return res.status(400).json({
                success:false,
                message:"Please upload a PDF.",
            })
        }
        console.log(req.file);
        const reportText = await extractTextFromPDF(req.file.path)
        const aiSummary = await explainMedicalReport(reportText)
        const report = await Report.create({
            user:req.user._id,
            fileName:req.file.filename,
            originalName:req.file.originalname,
            filePath:req.file.path,
            fileSize:req.file.size,
            mimeType:req.file.mimetype,
            reportText,
            aiSummary
        })

        return res.status(201).json({
            success:true,
            message:"Medical report analyzed successfully.",
            report
        })
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            success:false,
            message:"Server error"
        })
    }
}

export const getMyReports = async(req,res)=>{
    try{
        const reports = await Report.find({
            user:req.user._id
        }).sort({created:-1})

        res.status(200).json({
            success:true,
            reports
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            success:false,
            message:"Server Error"
        })
    }
}

export const getSingleReport = async(req,res)=>{
    try{
        const report = await Report.findOne({
            _id:req.params.id,
            user:req.user._id
        })

        if(!report){
            return res.status(404).json({
                success:false,
                message:"Report not found"
            })
        }
        res.status(200).json({
            success:true,
            report
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            success:false,
            message:"Server Error"
        })
    }
}

export const deleteReport = async(req,res)=>{
    try{
        const report = await Report.findOne({
            _id:req.params.id,
            user:req.user._id
        })

        if(!report){
            return res.status(404).json({
                success:false,
                message:"Report not found"
            })
        }
        if(fs.existsSync(report.filePath)){
            fs.unlinkSync(report.filePath)
        }

        await Report.findByIdAndDelete(report._id);

        res.status(200).json({
            success:true,
            message:"Report deleted successfully"
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            success:false,
            message:"Server Error"
        })
    }
}
