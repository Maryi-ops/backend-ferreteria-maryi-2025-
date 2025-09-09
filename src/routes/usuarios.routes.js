import { Router } from 'express';
import { obtenerUsuarios, obtenerUsuario, registrarUsuario } from '../controllers/usuarios.controllers.js';

const router = Router();

// Rutas
router.get('/usuarios', obtenerUsuarios);

// Ruta para obtener una usuario por su ID
router.get('/usuarios/:id_usuario', obtenerUsuario);

// Ruta para registrar una nueva usuario
router.post('/usuarios', registrarUsuario);

export default router;