import { Router } from 'express';
import { obtenerCompras, obtenerCompra, registrarCompra, eliminarCompra, actualizarCompra } from '../controllers/compras.controllers.js';

const router = Router();

// Rutas
router.get('/compras', obtenerCompras);

// Ruta para obtener una compra por su ID
router.get('/compras/:id_compra', obtenerCompra);

// Ruta para registrar una nueva compra
router.post('/compras', registrarCompra);

// Ruta para eliminar una compra por su ID
router.delete('/eliminarcompras/:id_compra', eliminarCompra);

// Ruta para actualizar una compra por su ID
router.patch('/actualizarcompras/:id_compra', actualizarCompra);
export default router;