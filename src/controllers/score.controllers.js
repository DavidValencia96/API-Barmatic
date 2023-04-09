import { pool } from '../db.js'

// obtener todos los scores
export const getScores = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM score')
        res.json(rows)

    } catch (error) {
        return res.status(500).json(error, {
            message: 'Something goes wrong'
        })
    }
}

// Obtener un score
export const getScore = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM score WHERE id_score = ?', [req.params.id])

        if(rows.length <= 0) return res.status(404).json({
            message: 'Score not found'
        })

        res.json(rows[0])

    } catch (error) {
        return res.status(500).json(error, {
            message: 'Something goes wrong'
        })
    }
}

// Crear un score
export const createdScore = async (req, res) => {
    try {
        const {points, date, id_user, id_category} = req.body
        const [rows] = await pool.query('INSERT INTO score (points, date, id_user, id_category) VALUES (?, ?, ?, ?)', [points, date, id_user, id_category])

        res.send({
            id: rows.insertId,
            points, date, id_user, id_category
        })
    } catch (error) {
        return res.status(500).json(error, {
            message: 'Something goes wrong'
        })
    }
}


// Actualizar un score
export const updateScore = async (req, res) => {
    const {id} = req.params
    const {points, date, id_user, id_category} = req.body

    try {
        // IFNULL(?, name) si no se envian todos los parametros para actualizar, entonces que tome el valor que tiene por defecto y actualice el parametro que se envio
        const [result] = await pool.query('UPDATE score SET points = IFNULL(?, points), date = IFNULL(?, date), id_user = IFNULL(?, id_user), id_category = IFNULL(?, id_category) WHERE id_score = ?', [points, date, id_user, id_category, id])

        if(result.affectedRows === 0) return res.status(400).json({
            message: 'Score not found'
        })

        const [rows] = await pool.query('SELECT * FROM score WHERE id_score = ?', [id])
        res.json(rows[0])

    } catch (error) {
        return res.status(500).json(error, {
            message: 'Something goes wrong'
        })
    }
}

// Eliminar un score
export const deleteScore = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM score WHERE id_score = ?', [req.params.id])

        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Score not found'
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json(error, {
            message: 'Something goes wrong'
        })
    }
}