import { Router } from 'express';
import { obtenerDetalles_Compras } from '../controllers/detalles_compras.controllers.js';

const router = Router();

// Rutas
router.get('/detalles_compras', obtenerDetalles_Compras);
export default router;