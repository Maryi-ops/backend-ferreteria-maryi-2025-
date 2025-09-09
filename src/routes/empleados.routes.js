import { Router } from 'express';
import { obtenerEmpleados } from '../controllers/empleados.cotrollers.js';

const router = Router();

// Rutas
router.get('/empleados', obtenerEmpleados);

// Ruta para obtener una empleado por su ID
router.get('/empleados/:id_empleado', obtenerEmpleados);

export default router;