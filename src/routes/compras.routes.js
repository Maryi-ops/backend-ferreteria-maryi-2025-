import { Router } from 'express';
import { obtenerCompras } from '../controllers/compras.controllers.js';

const router = Router();

// Rutas
router.get('/compras', obtenerCompras);
export default router;