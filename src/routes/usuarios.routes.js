import { Router } from 'express';
import { obtenerUsuarios } from '../controllers/usuarios.controllers.js';

const router = Router();

// Rutas
router.get('/usuarios', obtenerUsuarios);

// Ruta para obtener una usuario por su ID
router.get('/usuarios/:id_usuario', obtenerUsuarios);

export default router;