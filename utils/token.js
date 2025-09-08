import jwt from 'jsonwebtoken'

export const generateAccessToken = (user) => {
    return jwt.sign({ id: user._id, role: user.role}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRY,
    })
}

export const generateRefreshToken = (user) => {
    return jwt.sign({ id: user._id}, process.env.JWT_REFRESH_SECRET, {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    })
}