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

// Crear roll
export const createdNewRoll = async (req, res) => {
    try {
        const {id_roll,name} = req.body
        const [rows] = await pool.query('INSERT INTO roll (id_roll, name) VALUES (?, ?)', [id_roll, name])
        // res.send(rows)
        // res.send({
        //     id: rows.insertId,
        //     name,
        // })

        // consulta a db con todos los roles
        const [result] = await pool.query('SELECT * FROM roll')
        res.json(result)

    } catch (error) {
        return res.status(500).json(error, {
            message: 'Something goes wrong'
        })
    }
} 


// eliminar rol 
export const deleteRoll = async (req, res) => { 
    try {
        const [result] = await pool.query('DELETE FROM roll WHERE id_roll = ?', [req.params.id])

        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Roll not found'
        })

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json(error, {
            message: 'Something goes wrong'
        }) 
    }
}