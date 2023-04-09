import { Router } from 'express'
import { getCategories, getCategory, createdCategory, updateCategory, deleteCategory } from '../controllers/category.controllers.js'

const router = Router()

router.get('/category', getCategories)
router.get('/category/:id', getCategory)
router.post('/category', createdCategory)
router.patch('/category/:id', updateCategory)
router.delete('/category/:id', deleteCategory)


export default router