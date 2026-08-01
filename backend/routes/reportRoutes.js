import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import upload from '../middleware/uploadMiddleware.js'
import {uploadReport,getMyReports,getSingleReport,deleteReport} from '../controllers/reportController.js'
const router = express.Router()

router.post('/upload',authMiddleware,upload.single("report"),uploadReport)
router.get('/all',authMiddleware,getMyReports)
router.get('/:id',authMiddleware,getSingleReport)
router.delete('/:id',authMiddleware,deleteReport)
export default router;