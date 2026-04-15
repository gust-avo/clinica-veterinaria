import express from 'express';
import * as controller from '../controllers/tutoresController.js';

const router = express.Router();

router.get('/',controller.listarTutoresGTS);
router.get('/:id',controller.buscarTutorPorIdGTS);
router.post('/',controller.criarTutorGTS);

export default router;