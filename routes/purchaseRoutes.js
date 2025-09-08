import express from 'express'
import { authMiddleware } from '../middlewares/authMiddleware.js'
import { getMyPurchases, purchaseCourse } from '../controllers/purchaseController.js'



const router = express.Router()

router.post('/buy', authMiddleware, purchaseCourse)
router.get('/my-purchases', authMiddleware, getMyPurchases)

export default router


