const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    Nombre: { 
      type: String,
      //min: [3, "Longitud minima de 3 caracteres"],
      //max: [20, "Longitud maxima de 20 caracteres"],
  },
    Apellido: {
      type: String 
  },
    Mail: {
      type: String,
      //unique: true,
      format: "email",
      pattern: "^\\S+@\\S+\\.\\S+$",
      required: [true, "El correo es obligatorio"],
      
  },
    Password: {
      type: String 
  },
}
);

module.exports = model("User", userSchema, "user");
