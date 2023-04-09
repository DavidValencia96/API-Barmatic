import { pool } from '../db.js'

// obtener todos los users
export const getUsers = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM users')
        res.json(rows)

    } catch (error) {
        return res.status(500).json(error, {
            message: 'Something goes wrong'
        })
    }
}