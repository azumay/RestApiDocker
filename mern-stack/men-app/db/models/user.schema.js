import mongoose from 'mongoose';
const { Schema } = mongoose;

const loginSchema = new Schema({
  Nombre:  String, 
  Apellido: String,
  Mail:   String,
  Password: String,
  
});

const UserModel = mongoose.model('UserModel', loginSchema);