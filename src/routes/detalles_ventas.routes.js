import { Router } from 'express';
import { obtenerDetalles_Ventas } from '../controllers/detalles_ventas.controllers.js';

const router = Router();

// Rutas
router.get('/detalles_ventas', obtenerDetalles_Ventas);
export default router;