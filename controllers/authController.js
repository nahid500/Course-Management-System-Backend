import User from "../models/userModel.js"
import { generateAccessToken, generateRefreshToken } from "../utils/token.js"



export const register = async (req, res) => {
    const {name, email, password} = req.body

    const existing = await User.findOne({email})

    if(existing)
        return res.status(400).json({message: "User already exists"})

    const user = await User.create({name, email, password})
    res.status(201).json({

        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        message: "Registration Successful"})
    }

export const login = async(req,res) => {

    const {email,password} = req.body
    const user = await User.findOne({email})
    if(!user) 
        return res.status(400).json({message: "User is not registered"})

    const pass = await user.comparePassword(password)
    if(!pass)
        return res.status(400).json({message: "Credentials do not match"})


    const accessToken = generateAccessToken(user)
    const refreshToken = generateRefreshToken(user)
    user.refreshToken = refreshToken
    await user.save()

    res.status(200).json({
        accessToken,
        refreshToken,
        message: "Logged in Successfully"})
}

export const logout = async(req,res) => {
    const user = await User.findById(req.user.id)
    user.refreshToken = null
    await user.save()
    res.status(200).json({message: "Logged Out Successfully "})
}