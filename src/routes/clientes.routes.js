import { Router } from 'express';
import { obtenerClientes } from '../controllers/clientes.controllers.js';

const router = Router();

// Rutas
router.get('/clientes', obtenerClientes);

// Ruta para obtener una cliente por su ID
router.get('/clientes/:id_cliente', obtenerClientes);

export default router;