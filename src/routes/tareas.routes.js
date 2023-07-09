import { Router } from "express";
import { borrarTarea, crearTarea, obtenerTareas } from "../controllers/tareas.controllers";

const router = Router()

/* app.get('/prueba', (req, res)=>{
    res.send('esto es una prueba de la peticion GET a mi backend');
})  */

router.route('/tarea').get(obtenerTareas).post(crearTarea)
router.route('/tarea/:id').delete(borrarTarea);
export default router;