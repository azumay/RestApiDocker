 import "./../db/connection";
 import "./../db/models/user.schema";

          // Definir mètode registerUser()
          userManagement.registerUser =  async (req, res) => {
            try {
                // Desar en una constant les dades que venen per POST
                const dades = req;
                // Crear una instància de l'Schema amb les dades rebudes
                const newUser = new Schema({

                  Nombre: req.body.Nombre,
              
                  Apellido: req.body.Apellido,
              
                  Mail: req.body.email,

                  Password: req.body.Password
                });
                // Desar les dades amb el mètode .save(). Aquesta operació és asíncrona
                //newUser.save();
                // Enviar un missatge de confirmació 
                
            } catch (err) {
              res.status(400).json({
                  error: err
              });
            }
          };