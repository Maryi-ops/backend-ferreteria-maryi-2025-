import { Router } from 'express';
import { obtenerClientes, obtenerCliente, registrarCliente } from '../controllers/clientes.controllers.js';

const router = Router();

// Rutas
router.get('/clientes', obtenerClientes);

// Ruta para obtener una cliente por su ID
router.get('/clientes/:id_cliente', obtenerCliente);

// Ruta para registrar una nueva cliente
router.post('/clientes', registrarCliente);

export default router;