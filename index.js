import express from 'express'
import cors from "cors"
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoutes from './routes/authRoutes.js'



dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())






app.get('/', (req,res) => {
    res.send("API is running")
})

app.use('/auth', authRoutes)





const PORT = process.env.PORT

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => console.log(`Server is running at ${PORT}`)
    )
    
})
.catch((err) => console.error("MongoDB Connection Failed"))