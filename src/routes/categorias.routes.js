import { Router } from 'express';
import { obtenerCategorias, obtenerCategoria } from '../controllers/categorias.controllers.js';

const router = Router();

// Rutas
router.get('/categorias', obtenerCategoria);

// Ruta para obtener una categoría por su ID
router.get('/categorias/:id_categoria', obtenerCategoria);

export default router;