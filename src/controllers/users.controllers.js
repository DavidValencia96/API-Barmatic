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

// Obtener un user
export const getUser = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE id_user = ?', [req.params.id])

        if(rows.length <= 0) return res.status(404).json({
            message: 'User not found'
        })

        res.json(rows[0])

    } catch (error) {
        return res.status(500).json(error, {
            message: 'Something goes wrong'
        })
    }
}

// Crear un usuario
export const createdUser = async (req, res) => {
    try {
        const {name, lastname, email, password, school, degree, avatar, active, user_roll} = req.body
        const [rows] = await pool.query('INSERT INTO users (name, lastname, email, password, school, degree, avatar, active, user_roll) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [name, lastname, email, password, school, degree, avatar, active, user_roll])

        res.send({
            id: rows.insertId,
            name, lastname, email, password, school, degree, avatar, active, user_roll
        })
    } catch (error) {
        return res.status(500).json(error, {
            message: 'Something goes wrong'
        })
    }
}


// Actualizar un usuario
export const updateUser = async (req, res) => {
    const {id} = req.params
    const {name, lastname, email, password, school, degree, avatar, active, user_roll} = req.body

    try {
        // IFNULL(?, name) si no se envian todos los parametros para actualizar, entonces que tome el valor que tiene por defecto y actualice el parametro que se envio
        const [result] = await pool.query('UPDATE users SET name = IFNULL(?, name), lastname = IFNULL(?, lastname), email = IFNULL(?, email), password = IFNULL(?, password), school = IFNULL(?, school), degree = IFNULL(?, degree), avatar = IFNULL(?, avatar), active = IFNULL(?, active),   user_roll = IFNULL(?, user_roll) WHERE id_user = ?', [name, lastname, email, password, school, degree, avatar, active, user_roll, id])

        if(result.affectedRows === 0) return res.status(400).json({
            message: 'User not found'
        })

        const [rows] = await pool.query('SELECT * FROM users WHERE id_user = ?', [id])
        res.json(rows[0])

    } catch (error) {
        return res.status(500).json(error, {
            message: 'Something goes wrong'
        })
    }
}

// Eliminar un usuario
export const deleteUser = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM users WHERE id_user = ?', [req.params.id])

        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'User not found'
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json(error, {
            message: 'Something goes wrong'
        })
    }
}