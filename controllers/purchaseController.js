import Course from "../models/courseModel.js"
import Purchase from "../models/purchaseModel.js"



export const purchaseCourse = async (req, res) => {

    try {
        const {courseId} = req.body
        const userId = req.user.id

        const course = await Course.findById(courseId)
        if(!courseId)
            return res.status(400).json({message: "Course not found"})

        const alreadyPurchased = await Purchase.findOne({userId, courseId})
        if(alreadyPurchased)
            return res.status(400).json({message: "Course already purchased"})


        const purchase = await Purchase.create({
            userId, courseId, amount: course.price
        })

        res.status(201).json({message: "Course successfully Purchased"})
        
    } catch (err) {
        next(err)
        // res.status(500).json({message: "Purchase failed"})
    }

}

export const getMyPurchases = async(req,res) => {

    try {
        const userId = req.user.id
        const purchases = await Purchase.find({userId}).populate('courseId')

        res.status(200).json({purchases})


        
    } catch (err) {
        // res.status(500).json({message:"Error getting Purchases"})
        next(err)
    }
}