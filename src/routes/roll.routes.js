import { Router } from 'express'
import { getRoll } from '../controllers/roll.controller.js'

const router = Router()

router.get('/roll', getRoll)


export default router