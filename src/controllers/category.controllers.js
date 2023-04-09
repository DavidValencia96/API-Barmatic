import { pool } from '../db.js'

// obtener todos las categorias
export const getCategories = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM category')
        res.json(rows)

    } catch (error) {
        return res.status(500).json(error, {
            message: 'Something goes wrong'
        })
    }
}

// Obtener una catregoria
export const getCategory = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM category WHERE id_category = ?', [req.params.id])

        if(rows.length <= 0) return res.status(404).json({
            message: 'Category not found'
        })

        res.json(rows[0])

    } catch (error) {
        return res.status(500).json(error, {
            message: 'Something goes wrong'
        })
    }
}

// Crear una categoria
export const createdCategory = async (req, res) => {
    try {
        const {name, active} = req.body
        const [rows] = await pool.query('INSERT INTO category (name, active) VALUES (?, ?)', [name, active])

        res.send({
            id: rows.insertId,
            name,
            active
        })
    } catch (error) {
        return res.status(500).json(error, {
            message: 'Something goes wrong'
        })
    }
}


// Actualizar un usuario
export const updateCategory = async (req, res) => {
    const {id} = req.params
    const {name, active} = req.body

    try {
        // IFNULL(?, name) si no se envian todos los parametros para actualizar, entonces que tome el valor que tiene por defecto y actualice el parametro que se envio
        const [result] = await pool.query('UPDATE category SET name = IFNULL(?, name), active = IFNULL(?, active) WHERE id_category = ?', [name, active, id])

        if(result.affectedRows === 0) return res.status(400).json({
            meesage: 'Category not found'
        })

        const [rows] = await pool.query('SELECT * FROM category WHERE id_category = ?', [id])
        res.json(rows[0])

    } catch (error) {
        return res.status(500).json(error, {
            message: 'Something goes wrong'
        })
    }
}

// Eliminar una categoria
export const deleteCategory = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM category WHERE id_category = ?', [req.params.id])

        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Category not found'
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json(error, {
            message: 'Something goes wrong'
        })
    }
}