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