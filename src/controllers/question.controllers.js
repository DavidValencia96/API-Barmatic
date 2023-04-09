import { pool } from '../db.js'

// obtener todos las preguntas
export const getQuestions = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM question')
        res.json(rows)

    } catch (error) {
        return res.status(500).json(error, {
            message: 'Something goes wrong'
        })
    }
}

// Obtener una pregunta
export const getQuestion = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM question WHERE id_question = ?', [req.params.id])

        if(rows.length <= 0) return res.status(404).json({
            message: 'Question not found'
        })

        res.json(rows[0])

    } catch (error) {
        return res.status(500).json(error, {
            message: 'Something goes wrong'
        })
    }
}

// Crear una pregunta
export const createdQuestion = async (req, res) => {
    try {
        const {question, responseA, responseB, responseC, responseD, imageA, imageB, imageC, imageD, answer, date, active, id_category} = req.body
        const [rows] = await pool.query('INSERT INTO question (question, responseA, responseB, responseC, responseD, imageA, imageB, imageC, imageD, answer, date, active, id_category) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [question, responseA, responseB, responseC, responseD, imageA, imageB, imageC, imageD, answer, date, active, id_category])

        res.send({
            id: rows.insertId,
            question, responseA, responseB, responseC, responseD, imageA, imageB, imageC, imageD, answer, date, active, id_category
        })
    } catch (error) {
        return res.status(500).json(error, {
            message: 'Something goes wrong'
        })
    }
}


// Actualizar pregunta
export const updateQuestion = async (req, res) => {
    const {id} = req.params
    const {question, responseA, responseB, responseC, responseD, imageA, imageB, imageC, imageD, answer, date, active, id_category} = req.body

    try {
        // IFNULL(?, name) si no se envian todos los parametros para actualizar, entonces que tome el valor que tiene por defecto y actualice el parametro que se envio
        const [result] = await pool.query('UPDATE question SET question = IFNULL(?, question), responseA = IFNULL(?, responseA), responseB = IFNULL(?, responseB), responseC = IFNULL(?, responseC), responseD = IFNULL(?, responseD), imageA = IFNULL(?, imageA), imageB = IFNULL(?, imageB), imageC = IFNULL(?, imageC), imageD = IFNULL(?, imageD), answer = IFNULL(?, answer), date = IFNULL(?, date), active = IFNULL(?, active),  id_category = IFNULL(?, id_category) WHERE id_question = ?', [question, responseA, responseB, responseC, responseD, imageA, imageB, imageC, imageD, answer, date, active, id_category, id])

        if(result.affectedRows === 0) return res.status(400).json({
            message: 'Question not found'
        })

        const [rows] = await pool.query('SELECT * FROM question WHERE id_question = ?', [id])
        res.json(rows[0])

    } catch (error) {
        return res.status(500).json(error, {
            message: 'Something goes wrong'
        })
    }
}

// Eliminar una pregunta
export const deleteQuestion = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM question WHERE id_question = ?', [req.params.id])

        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Question not found'
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json(error, {
            message: 'Something goes wrong'
        })
    }
}