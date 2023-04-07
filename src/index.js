import express from 'express';
import indexRoutes from './routes/index.routes.js'
import employeesRoutes from './routes/employees.routes.js'

const app = express()

app.use(express.json())

app.use('/v1',indexRoutes)
app.use('/v1',employeesRoutes)


app.listen(3000)
console.log('server running on port 3000')