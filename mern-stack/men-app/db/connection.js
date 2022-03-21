const mongoose = require("mongoose");

//Importar variables de entorno
const {DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME} = process.env;

//Creacion de la URL de la conexión
const url= `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;

//Conexion a MongoDB
 mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
    
 const connection = mongoose.connection;

 connection.once('open', () => {
   console.log('Database is connected');
 });

