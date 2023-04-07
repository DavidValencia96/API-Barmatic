import express from 'express';
import indexRoutes from './routes/index.routes.js'
import employeesRoutes from './routes/employees.routes.js'

const app = express()

app.use(indexRoutes)
app.use(employeesRoutes)


app.listen(3000)
console.log('server running on port 3000')