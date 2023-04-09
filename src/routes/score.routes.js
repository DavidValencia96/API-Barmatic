import { Router } from 'express'
import { getScores , getScore, createdScore, updateScore, deleteScore } from '../controllers/score.controllers.js'

const router = Router()

router.get('/score', getScores )
router.get('/score/:id', getScore)
router.post('/score', createdScore)
router.patch('/score/:id', updateScore)
router.delete('/score/:id', deleteScore)


export default router