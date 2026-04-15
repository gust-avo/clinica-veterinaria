import prisma from '../prismaClient.js';

export const listarConsultasGTS = async(req,res)=>{
    const consultas = await prisma.consulta.findMany();
    res.json(consultas);
};

export const buscarConsultaPorIdGTS = async(req,res)=>{
    const {id} = req.params;

    const consulta = await prisma.consulta.findUnique({
        where:{id:Number(id)}
    });

    res.json(consulta);
};

export const criarConsultaGTS = async(req,res)=>{
    const {animal_id,data_consulta,motivo,diagnostico,veterinario} = req.body;

    const consulta = await prisma.consulta.create({
        data:{
            animal_id,
            data_consulta:new Date(data_consulta),
            motivo,
            diagnostico,
            veterinario
        }
    });

    res.status(201).json(consulta);
};

// 🔥 JOIN (continua obrigatório)
export const listarConsultasPorAnimalGTS = async(req,res)=>{
    const {id} = req.params;

    const consultas = await prisma.consulta.findMany({
        where:{animal_id:Number(id)},
        include:{animal:true}
    });

    res.json(consultas);
};