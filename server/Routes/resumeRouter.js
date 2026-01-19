import express from 'express'
import protect from '../Middlewares/authMiddleware.js'
import { createResume, updateResume, deleteResume, getResumeById, getPublicResumeById } from '../controllers/resumeController.js'




const resumeRouter = express.Router();

resumeRouter.post('/create', protect, createResume);

resumeRouter.put('/update', upload.single('image'), protect, updateResume);

resumeRouter.delete('/delete/:resumeId', protect, deleteResume);

resumeRouter.get('/get/:resumeId', protect, getResumeById);
resumeRouter.get('/public/:resumeId', getPublicResumeById)
