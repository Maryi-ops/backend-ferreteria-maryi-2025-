import { Router } from 'express';
import { obtenerProductos } from '../controllers/productos.controllers.js';

const router = Router();

// Rutas
router.get('/productos', obtenerProductos);

// Ruta para obtener una producto por su ID
router.get('/productos/:id_producto', obtenerProductos);

export default router;