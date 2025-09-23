import { pool } from '../../db_connection.js';

// Obtener todas las Detalles_compras

export const obtenerDetalles_Compras = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM Detalles_Compras');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error: error
        });
    }
};

export const obtenerDetalle_Compra = async (req, res) => {
    try {
        const id_detalle_compra = req.params.id_detalle_compra;
        const [result] = await pool.query('SELECT * FROM Detalles_Compras WHERE id_detalle_compra = ?', [id_detalle_compra]);
        if (result.length <= 0) {
            return res.status(404).json({
                mensaje: `Error al leer los datos. ID ${id_detalle_compra} no encontrado.`
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de las detalles_compras.'
        });
    }
};

// Registrar una nueva Detalle_Compra
export const registrarDetalle_Compra = async (req, res) => {
    try {
        const { 
            id_compra,
            id_producto,
            cantidad,
            precio_unitario
        } = req.body;
        
        const [result] = await pool.query(
            'INSERT INTO Detalles_Compras (id_compra, id_producto, cantidad, precio_unitario) VALUES (?, ?, ?, ?)',
            [id_compra,
            id_producto,
            cantidad,
            precio_unitario]
        );
        res.status(201).json({ id_detalle_compra: result.insertId });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al registrar el detalle de la compra.',
            error: error
        });
    }
};

// Eleiminar una detalle_compra por su ID
export const eliminarDetalle_Compra = async (req, res) => {
    try {
        const id_detalle_compra = req.params.id_detalle_compra;
        const [result] = await pool.query("DELETE FROM Detalles_Compras WHERE id_detalle_compra = ?", [id_detalle_compra]);
        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: `Error al eliminar el detalle de la compra. El ID ${id_detalle_compra} no fue encontrado.`
            });
        }
        // Respuesta sin contenido para indicar éxito
        res.status(204).send();
    } catch (error) {
        return res.status(500).json({
            mensaje: "Ha ocurrido un error al eliminar el detalle de la compra.",
            error: error
        });
    }
};