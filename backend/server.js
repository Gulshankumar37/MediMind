// import dotenv from 'dotenv'
// dotenv.config()
// import express from 'express'
// import cors from 'cors'
// import cookieParser from 'cookie-parser'
// import connectDB from './config/db.js'
// import authRoutes from './routes/authRoutes.js'
// import reportRoutes from './routes/reportRoutes.js'
// const app = express()
// connectDB()

// app.use(express.json())
// app.use(cookieParser())
// app.use('/api/auth',authRoutes);
// app.use('/api/report',reportRoutes);
// app.listen(3000,()=>{
//     console.log("server is running on port 3000")
// })



import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import reportRoutes from './routes/reportRoutes.js';

const app = express();

// CORS configuration
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/report', reportRoutes);

// Start server after database connection
const startServer = async () => {
    try {
        await connectDB();

        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1);
    }
};

startServer();
