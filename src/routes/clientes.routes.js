import { Router } from 'express';
import { obtenerClientes, obtenerCliente, registrarCliente, eliminarCliente, actualizarCliente } from '../controllers/clientes.controllers.js';

const router = Router();

// Rutas
router.get('/clientes', obtenerClientes);

// Ruta para obtener una cliente por su ID
router.get('/clientes/:id_cliente', obtenerCliente);

// Ruta para registrar una nueva cliente
router.post('/clientes', registrarCliente);

// Ruta para eliminar una cliente por su ID
router.delete('/eliminarclientes/:id_cliente', eliminarCliente);

// Ruta para actualizar una cliente por su ID
router.patch('/actualizarclientes/:id_cliente', actualizarCliente);

export default router;