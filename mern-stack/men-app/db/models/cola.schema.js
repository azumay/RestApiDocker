const { Schema, model } = require("mongoose");

let counter = 1;
let aux = 0;
let CountedId = {type: Number, default: () => ++counter};

const colaSchema = new Schema(
  {
    Nombre: { 
      type: String,
  },
    Apellido: {
      type: String 
  },
    Telefono: {
      type: String 
  },
    Servicio: {
      type: String
  },
    Tiquet:{
     type: Number, default: 0
  },


  },
  {timestamps: true} 
  );
  new Schema({ name: String }, { timestamps: true });

module.exports = model("Users", colaSchema, "cola");
