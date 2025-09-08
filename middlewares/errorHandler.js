

const errorHandler = (err,req,res,next) => {
    console.error(err.stack)
    res.status.json({message: err.message || "Server Error"})

}

export default errorHandler;