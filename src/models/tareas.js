import {model, Schema} from 'mongoose'

const tareaScheme = new Schema({
    nombreTarea: {
        type: String,
        minLength:2,
        maxLength:100,
        unique: true,
        required: true
    },
    DescripcionTarea: {
        type: String,
        minLength:2,
        maxLength:100000,
        unique: true,
        required: true
    }
})

const Tarea = model('tarea', tareaScheme)

export default Tarea;