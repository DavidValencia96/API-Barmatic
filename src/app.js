import express from 'express';
import indexRoutes from './routes/index.routes.js'
import employeesRoutes from './routes/employees.routes.js'


const app = express()

app.use(express.json())

app.use('/v1',indexRoutes)
app.use('/v1',employeesRoutes)

// mensaje para cuando no se encuentre el endpoint
app.use((req, res, next) => {
    res.status(404).json({
        message:'Not Found'
    })
})

export default app;