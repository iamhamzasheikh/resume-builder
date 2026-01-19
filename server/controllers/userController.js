import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Resume from '../models/Resume.js'


const generateToken = (userId) => {

    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' })
    return token;
}


// controller for user registration
//post: /api/users/register

export const registerUser = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        //check if required fields are available

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All Fields are required" })
        }

        //check if user already exist

        const user = await User.findOne({ email })

        if (user) {
            return res.status(400).json({ message: "User Already Exist with this Email." })
        }

        // create new user

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name: name,
            email: email,
            password: hashedPassword,
        })

        const token = generateToken(newUser._id)
        newUser.password = undefined;

        return res.status(201).json({ message: 'user created successfully', token, user: newUser })



    } catch (error) {
        return res.status(400).json({ message: error.message })
    }

}

// controller function for user login
// POST: /api/users/login

export const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;

        //check if user exist

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(400).json({ message: "User not found" })
        }

        //check if password is correct?
        if (!user.comparePassword(password)) {
            return res.status(400).json({ message: "invalid password" })
        }

        //send success message

        const token = generateToken(user._id)
        user.password = undefined;

        return res.status(200).json({ message: 'Login successfully', token, user: user })


    } catch (error) {
        return res.json({ message: error.message })
    }

}

// controller for getting user data using userID

//GET: /api/users/data

export const getUserById = async (req, res) => {

    try {

        const userId = req.userId;
        // check if user exist

        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        // if user available return user
        user.password = undefined;
        return res.status(200).json({ user: user })

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }

}

//controller for getting user resume 
//GET: /api/users/resume

export const getUserResume = async (req, res) => {

    try {

        const userId = req.userId;

        // return user resume 

        const resumes = await Resume.find({ userId });
        return res.status(200).json({ resumes })

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
