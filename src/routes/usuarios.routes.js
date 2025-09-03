import { Router } from 'express';
import { obtenerUsuarios } from '../controllers/usuarios.controllers.js';

const router = Router();

// Rutas
router.get('/usuarios', obtenerUsuarios);
export default router;