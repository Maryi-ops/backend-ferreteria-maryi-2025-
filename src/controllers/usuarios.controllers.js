import { pool } from '../../db_connection.js';

// Obtener todas las usuarios

export const obtenerUsuarios = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM Usuarios');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error: error
        });
    }
};


export const obtenerUsuario = async (req, res) => {
    try {
        const id_usuario = req.params.id_usuario;
        const [result] = await pool.query('SELECT * FROM Usuarios WHERE id_usuario = ?', [id_usuario]);
        if (result.length <= 0) {
            return res.status(404).json({
                mensaje: `Error al leer los datos. ID ${id_usuario} no encontrado.`
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de las usuarios.'
        });
    }
};


export const registrarUsuario = async (req, res) => {
    try {
        const { 
            usuario,
            contraseña
        } = req.body;
        
        const [result] = await pool.query(
            'INSERT INTO Usuarios (usuario, contraseña) VALUES (?, ?)',
            [usuario,
            contraseña]
        );
        res.status(201).json({ id_usuario: result.insertId });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al registrar el usuario.',
            error: error
        });
    }
};

// Eleiminar una usuario por su ID
export const eliminarUsuario = async (req, res) => {
    try {
        const id_usuario = req.params.id_usuario;
        const [result] = await pool.query("DELETE FROM Usuarios WHERE id_usuario = ?", [id_usuario]);
        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: `Error al eliminar el usuario. El ID ${id_usuario} no fue encontrado.`
            });
        }
        // Respuesta sin contenido para indicar éxito
        res.status(204).send();
    } catch (error) {
        return res.status(500).json({
            mensaje: "Ha ocurrido un error al eliminar el usuario.",
            error: error
        });
    }
};

// Actualizar una usuario por su ID
export const actualizarUsuario = async (req, res) => {
    try {
        const id_usuario = req.params.id_usuario;
        const { usuario, contraseña } = req.body;
        const [result] = await pool.query(
            'UPDATE Usuarios SET usuario = ?, contraseña = ? WHERE id_usuario = ?',
            [usuario, contraseña, id_usuario]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: `Error al actualizar el usuario. El ID ${id_usuario} no fue encontrado.`
            });
        }
        res.status(200).json({
            mensaje: `Usuario con ID ${id_usuario} actualizado exitosamente.`
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: "Ha ocurrido un error al actualizar el usuario.",
            error: error
        });
    }
};