import { Router } from 'express';
import { obtenerDetalles_Compras, obtenerDetalle_Compra, registrarDetalle_Compra } from '../controllers/detalles_compras.controllers.js';

const router = Router();

// Rutas
router.get('/detalles_compras', obtenerDetalles_Compras);

// Ruta para obtener una detalle_compra por su ID
router.get('/detalles_compras/:id_detalle_compra', obtenerDetalle_Compra);

// Ruta para registrar una nueva detalle_compra
router.post('/detalles_compras', registrarDetalle_Compra);

export default router;