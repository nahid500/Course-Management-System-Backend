import exprss from 'express'
import { authMiddleware } from '../middlewares/authMiddleware.js'
import {createCourse, getAllCourses, getSingleCourse, deleteCourse} from '../controllers/courseController.js'
import {requiredRole} from '../middlewares/roleMiddleware.js'

const router = exprss.Router()


router.post('/create', authMiddleware, requiredRole('admin'), createCourse)
router.delete('/:id', authMiddleware, requiredRole('admin'), deleteCourse)



router.get('/', getAllCourses)
router.get('/:id', getSingleCourse)

export default router