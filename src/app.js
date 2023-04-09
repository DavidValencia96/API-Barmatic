import express from 'express';
import indexRoutes from './routes/index.routes.js'
import employeesRoutes from './routes/employees.routes.js'
import roll from './routes/roll.routes.js'
import users from './routes/users.routes.js'
import category from './routes/category.routes.js'
import score from './routes/score.routes.js'
import question from './routes/question.routes.js'


const app = express()

app.use(express.json())

app.use('/v1',indexRoutes)
app.use('/v1',employeesRoutes)
app.use('/v1',roll)
app.use('/v1',users)
app.use('/v1',category)
app.use('/v1',score)
app.use('/v1',question)

// mensaje para cuando no se encuentre el endpoint
app.use((req, res, next) => {
    res.status(404).json({
        message:'Not Found'
    })
})

export default app;