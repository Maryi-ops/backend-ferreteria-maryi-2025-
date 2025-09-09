import { Router } from 'express';
import { obtenerCompras, obtenerCompra, registrarCompra } from '../controllers/compras.controllers.js';

const router = Router();

// Rutas
router.get('/compras', obtenerCompras);

// Ruta para obtener una compra por su ID
router.get('/compras/:id_compra', obtenerCompra);

// Ruta para registrar una nueva compra
router.post('/compras', registrarCompra);

export default router;