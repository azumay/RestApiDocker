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
}
);

module.exports = model("Users", colaSchema, "cola");
