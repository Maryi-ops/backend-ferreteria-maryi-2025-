
import { pool } from '../../db_connection.js';

// Obtener todas las ventas

export const obtenerVentas = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM Ventas');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error: error
        });
    }
}

export const obtenerVenta = async (req, res) => {
    try {
        const id_venta = req.params.id_venta;
        const [result] = await pool.query('SELECT * FROM Ventas WHERE id_venta = ?', [id_venta]);
        if (result.length <= 0) {
            return res.status(404).json({
                mensaje: `Error al leer los datos. ID ${id_venta} no encontrado.`
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de las ventas.'
        });
    }
};

export const registrarVenta = async (req, res) => {
    try {
        const { 
            id_cliente,
            id_empleado,
            fecha_venta,
            total_venta
        } = req.body;
        
        const [result] = await pool.query(
            'INSERT INTO Ventas (id_cliente, id_empleado, fecha_venta, total_venta) VALUES (?, ?, ?, ?)',
            [id_cliente,
            id_empleado,
            fecha_venta,
            total_venta]
        );
        res.status(201).json({ id_venta: result.insertId });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al registrar la venta.',
            error: error
        });
    }
};

// Eleiminar una ventas por su ID
export const eliminarVenta = async (req, res) => {
    const { id_venta } = req.params;

    try {
        // Primero eliminar detalles asociados (si hay FK)
        await pool.query('DELETE FROM detalles_ventas WHERE id_venta = ?', [id_venta]);

        // Luego eliminar la venta
        const [result] = await pool.query('DELETE FROM ventas WHERE id_venta = ?', [id_venta]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Venta no encontrada' });
        }

        res.json({ message: 'Venta eliminada' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar venta', error: error.message });
    }
};

// Actualizar una venta por su ID
export const actualizarVenta = async (req, res) => {
    try {
        const id_venta = req.params.id_venta;
        const { id_cliente, id_empleado, fecha_venta, total_venta } = req.body;
        const [result] = await pool.query(
            'UPDATE Ventas SET id_cliente = ?, id_empleado = ?, fecha_venta = ?, total_venta = ? WHERE id_venta = ?',
            [id_cliente, id_empleado, fecha_venta, total_venta, id_venta]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: `Error al actualizar la venta. El ID ${id_venta} no fue encontrado.`
            });
        }
        res.status(200).json({
            mensaje: `Venta con ID ${id_venta} actualizado exitosamente.`
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: "Ha ocurrido un error al actualizar la venta.",
            error: error
        });
    }
};

