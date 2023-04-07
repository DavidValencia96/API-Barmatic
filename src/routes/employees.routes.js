import { Router } from 'express'
import {getEmployee, getEmployees, createEmployee, updateEmployee, deleteEmployee} from '../controllers/employees.controllers.js'
const router  = Router()


router.get('/employes', getEmployees)
router.get('/employes/:id', getEmployee)
router.post('/employes', createEmployee )
router.put('/employes', updateEmployee)
router.delete('/employes', deleteEmployee)


export default router
