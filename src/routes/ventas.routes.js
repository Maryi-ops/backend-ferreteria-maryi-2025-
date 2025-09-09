import { Router } from 'express';
import { obtenerVentas } from '../controllers/ventas.controllers.js';

const router = Router();

// Rutas
router.get('/ventas', obtenerVentas);

// Ruta para obtener una venta por su ID
router.get('/ventas/:id_venta', obtenerVentas);

export default router;