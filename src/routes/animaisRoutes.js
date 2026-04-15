import express from 'express';
import * as controller from '../controllers/animaisController.js';
import { listarConsultasPorAnimalGTS } from '../controllers/consultasController.js';

const router = express.Router();

router.get('/',controller.listarAnimaisGTS);
router.get('/:id',controller.buscarAnimalPorIdGTS);
router.post('/',controller.criarAnimalGTS);

router.get('/:id/consultas',listarConsultasPorAnimalGTS);

export default router;