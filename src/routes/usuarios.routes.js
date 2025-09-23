import { Router } from 'express';
import { obtenerUsuarios, obtenerUsuario, registrarUsuario, eliminarUsuario } from '../controllers/usuarios.controllers.js';

const router = Router();

// Rutas
router.get('/usuarios', obtenerUsuarios);

// Ruta para obtener una usuario por su ID
router.get('/usuarios/:id_usuario', obtenerUsuario);

// Ruta para registrar una nueva usuario
router.post('/usuarios', registrarUsuario);

// Ruta para eliminar una usuario por su ID
router.delete('/eliminarusuarios/:id_usuario', eliminarUsuario);

export default router;