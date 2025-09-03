import { Router } from 'express';
import { obtenerClientes } from '../controllers/clientes.controllers.js';

const router = Router();

// Rutas
router.get('/clientes', obtenerClientes);
export default router;