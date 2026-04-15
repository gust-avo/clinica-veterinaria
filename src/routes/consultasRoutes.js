import express from 'express';
import * as controller from '../controllers/consultasController.js';

const router = express.Router();

router.get('/',controller.listarConsultasGTS);
router.get('/:id',controller.buscarConsultaPorIdGTS);
router.post('/',controller.criarConsultaGTS);

export default router;