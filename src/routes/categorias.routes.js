import { Router } from 'express';
import { obtenerCategorias } from '../controllers/categorias.controllers';

const router = Router();

// Rutas
router.get('/categorias', obtenerCategorias);
export default router;