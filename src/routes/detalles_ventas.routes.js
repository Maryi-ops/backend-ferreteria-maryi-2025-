import { Router } from 'express';
import { obtenerDetalles_Ventas } from '../controllers/detalles_ventas.controllers.js';

const router = Router();

// Rutas
router.get('/detalles_ventas', obtenerDetalles_Ventas);

// Ruta para obtener una detalle_venta por su ID
router.get('/detalles_ventas/:id_detalle_venta', obtenerDetalles_Ventas);

export default router;