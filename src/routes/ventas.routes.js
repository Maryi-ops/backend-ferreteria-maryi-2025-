import { Router } from 'express';
import { obtenerVentas } from '../controllers/ventas.controllers.js';

const router = Router();

// Rutas
router.get('/ventas', obtenerVentas);
export default router;