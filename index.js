import express from 'express'
import cors from 'cors';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import './src/database/dbConnection';
import tareaRouter from './src/routes/tareas.routes'

dotenv.config();
//configurar un puerto
//crear una instancia de express
const app = express();

app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), ()=>{
    console.log("Estoy en el puerto " + app.get("port"));
})

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//app.use(morgan('dev'));

//rutas
// http://localhost:3004/productos

app.use("/apitarea", tareaRouter)