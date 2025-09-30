import { Router } from 'express';
import { obtenerEmpleados, obtenerEmpleado, registrarEmpleado, eliminarEmpleado, actualizarEmpleado } from '../controllers/empleados.cotrollers.js';

const router = Router();

// Rutas
router.get('/empleados', obtenerEmpleados);

// Ruta para obtener una empleado por su ID
router.get('/empleados/:id_empleado', obtenerEmpleado);

// Ruta para registrar una nueva empleado
router.post('/empleados', registrarEmpleado);

// Ruta para eliminar una empleado por su ID
router.delete('/eliminarempleados/:id_empleado', eliminarEmpleado);

// Ruta para actualizar una empleado por su ID
router.patch('/actualizarempleados/:id_empleado', actualizarEmpleado);

export default router;