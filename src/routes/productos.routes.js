import { Router } from 'express';
import { obtenerProductos, obtenerProducto, registrarProducto, eliminarProducto } from '../controllers/productos.controllers.js';

const router = Router();

// Rutas
router.get('/productos', obtenerProductos);

// Ruta para obtener una producto por su ID
router.get('/productos/:id_producto', obtenerProducto);

// Ruta para registrar una nueva producto
router.post('/productos', registrarProducto);

// Ruta para eliminar una producto por su ID
router.delete('/eliminarproductos/:id_producto', eliminarProducto);

export default router;