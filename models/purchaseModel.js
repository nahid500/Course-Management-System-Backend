import mongoose, { mongo } from "mongoose";



const purchaseSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    purchaseDate:{
        type: Date,
        default: Date.now
    }
})

const Purchase = mongoose.model('Purchase', purchaseSchema)

export default Purchase