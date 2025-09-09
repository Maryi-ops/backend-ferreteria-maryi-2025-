import { Router } from 'express';
import { obtenerCompras } from '../controllers/compras.controllers.js';

const router = Router();

// Rutas
router.get('/compras', obtenerCompras);

// Ruta para obtener una compra por su ID
router.get('/compras/:id_compra', obtenerCompras);

export default router;