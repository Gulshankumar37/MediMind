import multer from 'multer'
import path from 'path'
import fs from 'fs'

if(!fs.existsSync("uploads")){
    fs.mkdirSync("uploads")
}

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/");
    },
    filename:(req,file,cb)=>{
        const uniqueName = 
        Date.now()+"-"+
        Math.round(Math.random()*1E9)+
        path.extname(file.originalname);
        cb(null,uniqueName)
    }
})

const fileFilter = (req,file,cb)=>{
    if(file.mimetype==="application/pdf"){
        cb(null,true);
    }
    else{
        cb(new error("Only PDF files are allowed"),false);
    }
}

const upload = multer({
    storage,
    fileFilter,
    limits:{
        fileSize:10*1024*1024
    }
})

export default upload;