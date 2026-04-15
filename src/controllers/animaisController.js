import prisma from '../prismaClient.js';

export const listarAnimaisGTS = async(req,res)=>{
    const animais = await prisma.animal.findMany();
    res.json(animais);
};

export const buscarAnimalPorIdGTS = async(req,res)=>{
    const {id} = req.params;

    const animal = await prisma.animal.findUnique({
        where:{id:Number(id)}
    });

    res.json(animal);
};

export const criarAnimalGTS = async(req,res)=>{
    const {nome,especie,raca,data_nascimento,tutor_id} = req.body;

    const animal = await prisma.animal.create({
        data:{
            nome,
            especie,
            raca,
            data_nascimento:new Date(data_nascimento),
            tutor_id
        }
    });

    res.status(201).json(animal);
};