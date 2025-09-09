import { Router } from 'express';
import { obtenerProductos, obtenerProducto, registrarProducto } from '../controllers/productos.controllers.js';

const router = Router();

// Rutas
router.get('/productos', obtenerProductos);

// Ruta para obtener una producto por su ID
router.get('/productos/:id_producto', obtenerProducto);

// Ruta para registrar una nueva producto
router.post('/productos', registrarProducto);

export default router;