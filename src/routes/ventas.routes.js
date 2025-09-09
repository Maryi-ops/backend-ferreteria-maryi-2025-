import { Router } from 'express';
import { obtenerVentas, obtenerVenta, registrarVenta } from '../controllers/ventas.controllers.js';

const router = Router();

// Rutas
router.get('/ventas', obtenerVentas);

// Ruta para obtener una venta por su ID
router.get('/ventas/:id_venta', obtenerVenta);

// Ruta para registrar una nueva venta
router.post('/ventas', registrarVenta); 

export default router;