import prisma from '../prismaClient.js';

export const listarTutoresGTS = async(req,res)=>{
    const tutores = await prisma.tutor.findMany();
    res.json(tutores);
};

export const buscarTutorPorIdGTS = async(req,res)=>{
    const {id} = req.params;

    const tutor = await prisma.tutor.findUnique({
        where:{id:Number(id)}
    });

    res.json(tutor);
};

export const criarTutorGTS = async(req,res)=>{
    const {nome,telefone,email} = req.body;

    const tutor = await prisma.tutor.create({
        data:{nome,telefone,email}
    });

    res.status(201).json(tutor);
};