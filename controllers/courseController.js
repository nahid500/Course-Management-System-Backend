import Course from "../models/courseModel.js";




export const createCourse = async (req, res) => {

    try{
        const {title, description, price, instructor} = req.body

        if(!title || !description || !price || !instructor)
            return res.status(400).json({message: "Need all informations"})

        const course = await Course.create({title, description, price, instructor}) 
        res.status(201).json({message: "Course Created Successfully"})

    }

    catch(err){
        // console.log(err);
        next(err)
    }

}

export const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find()
        res.status(200).json(courses)

    } catch (err) {
        // console.log(err);
        next(err)
        
    } 
}

export const getSingleCourse = async (req, res) => {
    try {
        const id = req.params.id
        const course = await Course.findById(id)
        if(!course) 
            return res.status(400).json({message:"Course not Found"})

        res.status(200).json(course)

    } catch (err) {
        // res.status(500).json({message: "Course not Found"})
        next(err)
    }
}

export const deleteCourse = async (req, res) => {
    try {
        const id = req.params.id
        const course = await Course.findByIdAndDelete(id)

        if(!course) 
            return res.status(400).json({message:"Course not Found"})

        res.status(200).json({message: "Course deleted successfully"})
    } catch (err) {
        // res.status(500).json({message: "Error deleting Course"})
        next(err)
        
    }
}