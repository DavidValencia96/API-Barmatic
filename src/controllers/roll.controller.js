import { pool } from '../db.js'

// obtener todos los roles
export const getRoll = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM roll')
        res.json(rows)

    } catch (error) {
        return res.status(500).json(error, {
            message: 'Something goes wrong'
        })
    }
}