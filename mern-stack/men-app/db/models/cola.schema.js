const { Schema, model } = require("mongoose");

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
  }

  },
  {timestamps: true} 
  );
  new Schema({ name: String }, { timestamps: true });

module.exports = model("Users", colaSchema, "cola");
