
import { Router } from "express"
import { connect } from '../controllers/index.controllers.js'

const router = Router()


router.get('/test-check', connect)

export default router