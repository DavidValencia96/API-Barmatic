import { Router } from 'express'
import { getRoll, createdNewRoll, deleteRoll } from '../controllers/roll.controllers.js'

const router = Router()

router.get('/roll', getRoll)
router.post('/roll', createdNewRoll)
router.delete('/roll/:id', deleteRoll)


export default router