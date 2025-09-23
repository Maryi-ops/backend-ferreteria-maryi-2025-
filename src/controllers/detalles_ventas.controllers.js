import { pool } from '../../db_connection.js';

// Obtener todas las detalles_ventas

export const obtenerDetalles_Ventas = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM Detalles_Ventas');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error: error
        });
    }
};


export const obtenerDetalle_Venta = async (req, res) => {
    try {
        const id_detalle_venta = req.params.id_detalle_venta;
        const [result] = await pool.query('SELECT * FROM Detalles_Ventas WHERE id_detalle_venta = ?', [id_detalle_venta]);
        if (result.length <= 0) {
            return res.status(404).json({
                mensaje: `Error al leer los datos. ID ${id_detalle_venta} no encontrado.`
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de las detalles_ventas.'
        });
    }
};

// Registrar una nueva Detalle_Venta
export const registrarDetalle_Venta = async (req, res) => {
    try {
        const { 
            id_venta,
            id_producto,
            cantidad,
            precio_unitario
        } = req.body;
        
        const [result] = await pool.query(
            'INSERT INTO Detalles_Ventas (id_venta, id_producto, cantidad, precio_unitario) VALUES (?, ?, ?, ?)',
            [id_venta,
            id_producto,
            cantidad,
            precio_unitario]
        );
        res.status(201).json({ id_detalle_venta: result.insertId });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al registrar el detalle de la venta.',
            error: error
        });
        
    }
};

// Eleiminar una detalle_venta por su ID
export const eliminarDetalle_Venta = async (req, res) => {
    try {
        const id_detalle_venta = req.params.id_detalle_venta;
        const [result] = await pool.query("DELETE FROM Detalles_Ventas WHERE id_detalle_venta = ?", [id_detalle_venta]);
        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: `Error al eliminar el detalle de la venta. El ID ${id_detalle_venta} no fue encontrado.`
            });
        }
        // Respuesta sin contenido para indicar éxito
        res.status(204).send();
    } catch (error) {
        return res.status(500).json({
            mensaje: "Ha ocurrido un error al eliminar el detalle de la venta.",
            error: error
        });
    }
};