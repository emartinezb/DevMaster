const app=require("./app");
const connectDatabase = require("./config/database");

//Settear el archivo de configuración
const dotenv=require("dotenv");
const { connect } = require("mongoose");
dotenv.config({path: 'back/config/config.env'})

//configurar base de datos
connectDatabase();

//Llamo al server
const server=app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})