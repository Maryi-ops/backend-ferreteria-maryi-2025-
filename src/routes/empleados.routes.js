import { Router } from 'express';
import { obtenerEmpleados } from '../controllers/empleados.cotrollers.js';

const router = Router();

// Rutas
router.get('/empleados', obtenerEmpleados);
export default router;