import { Router } from 'express';
import { obtenerVentas, obtenerVenta, registrarVenta, eliminarVenta, actualizarVenta} from '../controllers/ventas.controllers.js';

const router = Router();

// Rutas
router.get('/ventas', obtenerVentas);

// Ruta para obtener una venta por su ID
router.get('/ventas/:id_venta', obtenerVenta);

// Ruta para registrar una nueva venta
router.post('/ventas', registrarVenta); 

// Ruta para eliminar una venta por su ID
router.delete('/eliminarventas/:id_venta', eliminarVenta);

// Ruta para actualizar una venta por su ID
router.patch('/actualizarventas/:id_venta', actualizarVenta);

export default router;