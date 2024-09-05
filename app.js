import express from 'express'
import moduleName, { PORT } from './src/settings/environments.js'
const app = express()

app.listen(PORT, ()=>{
    console.log(`servidor corriendo en el puerto ${PORT}`);
    });