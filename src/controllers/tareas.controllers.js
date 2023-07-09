import Tarea from "../models/tareas.js";

export const obtenerTareas = async (req, res)=>{
    try {
        const tareas = await Tarea.find()
        res.status(200).json(tareas)
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar las tareas'
        })
    }
};

export const crearTarea = async (req, res)=>{
    try {
        console.log(req.body);
        const tareaNueva = new Tarea(req.body)
        await tareaNueva.save()
        res.status(201).json({
            mensaje: 'La tarea se creo correctamente',
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al crear la tarea'
        })
    }
}

export const borrarTarea = async (req, res)=>{
    try {
        console.log(req);
        console.log(req.params.id);
        await Tarea.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje:'La tarea fue eliminada',
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al intentar borrar la tarea'
        })
    }
}

