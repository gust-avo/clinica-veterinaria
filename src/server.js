import express from 'express';
import dotenv from 'dotenv';

import tutoresRoutes from './routes/tutoresRoutes.js';
import animaisRoutes from './routes/animaisRoutes.js';
import consultasRoutes from './routes/consultasRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/tutores',tutoresRoutes);
app.use('/animais',animaisRoutes);
app.use('/consultas',consultasRoutes);

app.listen(3000,()=>{
    console.log('Servidor rodando na porta 3000');
});