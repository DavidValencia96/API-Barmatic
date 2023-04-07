import { Router } from 'express'
import {getEmployes, createEmployes, updateEmployes, deleteEmployes} from '../controllers/employees.controllers.js'
const router  = Router()


router.get('/employes', getEmployes)
router.post('/employes', createEmployes )
router.put('/employes', updateEmployes)
router.delete('/employes', deleteEmployes)


export default router
