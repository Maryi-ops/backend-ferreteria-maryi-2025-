import { Router } from 'express';
import { obtenerEmpleados, obtenerEmpleado, registrarEmpleado } from '../controllers/empleados.cotrollers.js';

const router = Router();

// Rutas
router.get('/empleados', obtenerEmpleados);

// Ruta para obtener una empleado por su ID
router.get('/empleados/:id_empleado', obtenerEmpleado);

// Ruta para registrar una nueva empleado
router.post('/empleados', registrarEmpleado);

export default router;