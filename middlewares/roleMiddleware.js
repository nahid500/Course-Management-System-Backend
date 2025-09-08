


export const requiredRole = (role) => {
    return (req,res,next) => {
        if(req.user?.role !== role) 
            res.status(400).json({message: `User is not ${role}`})

        next()
    }
}