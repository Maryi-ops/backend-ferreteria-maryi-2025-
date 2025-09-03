import { pool } from '../../db_connection.js';

// Obtener todas las productos

export const obtenerProductos = async (req, res) => {
try {
const [result] = await pool.query('SELECT * FROM Productos');
res.json(result);
} catch (error) {
return res.status(500).json({
mensaje: 'Ha ocurrido un error al leer los datos.',
error: error
});
}
};