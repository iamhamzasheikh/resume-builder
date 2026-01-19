import Resume from '../models/Resume.js'

// controller for creating new resume 
// POST: /api/resumes/create


export const createResume = async (req, res) => {

    try {

        const userId = req.userId;
        const { title } = req.body;

        // create new resume 

        const newResume = await Resume.create({ userId, title });

        //return success message 

        return res.status(201).json({ message: 'Resume created successfully', resume: newResume })

    } catch (error) {
        res.status(400).json({ message: error.message });
    }

}

export const deleteResume = async (req, res) => {

    try {

        const userId = req.userId;
        const { resumeId } = req.params;

        await Resume.findOneAndDelete({ userId, _id: resumeId });

        return res.status(200).json({ message: 'Resume deleted' })

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// get user resume by id
// GET /api/resumes/get

export const getResumeById = async (req, res) => {
    try {

        const userId = req.userId;
        const { resumeId } = req.params;

        const resume = await resume.findOne({ userId, _id: resumeId })
        if (!resume) {
            return res.status(404).json({ message: 'resume not found' })
        }

        resume._v = undefined;
        resume.createdAt = undefined;
        resume.updatedAt = undefined;


        return res.status(200).json({ resume })

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

//get resume by id public
//GET: /api/resumes/public
export const getPublicResumeById = async (req, res) => {

    try {

        const { resumeId } = req.params;

        const resume = await Resume.findOne({ public: true, _id: resumeId })
        if (!resume) {
            return res.status(404).json({ message: 'Resume not found' })
        }

        return res.status(200).json({ resume })

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }

}

//updating the resume 
//PUT: /api/resumes/update

export const updateResume = async () => {

    try {
        const userId = req.userId;
        const { resumeId, resumeData, removeBackground } = req.body;
        const image = req.file;

        let resumeDataCopy = JSON.parse(resumeData);
        const resume = await Resume.findByIdAndUpdate({ userId, _id: resumeId }, resumeDataCopy, { new: true })

        return res.status(200).json({ message: 'Saved Successfully', resume })

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}