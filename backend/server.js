import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import reportRoutes from './routes/reportRoutes.js'
const app = express()
connectDB()
app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://medimind-rho.vercel.app"
        ],
        credentials: true
    })
)
app.use(express.json())
app.use(cookieParser())
app.use('/api/auth',authRoutes);
app.use('/api/report',reportRoutes);

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})