import { Router } from 'express'
import { getQuestions, getQuestion, createdQuestion, updateQuestion, deleteQuestion } from '../controllers/question.controllers.js'

const router = Router()

router.get('/question', getQuestions)
router.get('/question/:id', getQuestion)
router.post('/question', createdQuestion)
router.patch('/question/:id', updateQuestion)
router.delete('/question/:id', deleteQuestion)


export default router