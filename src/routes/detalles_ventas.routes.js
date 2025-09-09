import { Router } from 'express';
import { obtenerDetalles_Ventas, obtenerDetalle_Venta, registrarDetalle_Venta } from '../controllers/detalles_ventas.controllers.js';

const router = Router();

// Rutas
router.get('/detalles_ventas', obtenerDetalles_Ventas);

// Ruta para obtener una detalle_venta por su ID
router.get('/detalles_ventas/:id_detalle_venta', obtenerDetalle_Venta);

// Ruta para registrar una nueva detalle_venta
router.post('/detalles_ventas', registrarDetalle_Venta);

export default router;