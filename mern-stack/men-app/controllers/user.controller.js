require("./../db/connection");
const User = require("./../db/models/user.schema");

const ColaUser = require("./../db/models/cola.schema");

//obj para exportar
const userManagement = {};

/** Practica M6 Regristro y Login **/

userManagement.loginUser = async (req, res) => {
  try {
    // Cogemos Mail y Passowrd de los datos enviados del cliente
    const dataUser = req.body;

    const getPassword = req.body.Password;
    const getMail = req.body.Mail;

    // Consultar a la BD si existe un usuario con ese mail

    const foundMail = await User.findOne({ Mail: dataUser.Mail });

    // Si no existe generamos un error
    if (foundMail === null) {
      throw `{Mail : This mail not exist  }`;
    }
    // Si existe
    else {
      // Comparamos password
      const comparePassword = await User.findOne({
        Password: dataUser.Password,
      });

      //Si no coincide error
      if (!comparePassword) {
        throw `{Mail o password incorrecto  }`;
      } else {
        var datosUser = await User.findOne({ Mail: dataUser.Mail });
        res.json([
          {
            Nombre: datosUser.Nombre,
            Apellido: datosUser.Apellido,
            Mail: datosUser.Mail,
          },
        ]);
      }
    }
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

userManagement.registerUser = async (req, res) => {
  try {
    // Cogemos los datos del body enviados desde el client
    const dataUser = req.body;
    //Creamos una expresion regular para validar contraseñas.
    /*
      La contraseña debe tener al entre 8 y 16 caracteres
      Al menos un dígito con minúscula y una mayúscula.
      NO puede tener otros símbolos.
    */
    const formatPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

    if (formatPassword.test(req.body.Password)) {
      //Comprobamos que no existe ese mail en la base de datos
      const foundUser = await User.findOne({ Mail: dataUser.Mail });
      //const password = await bcrypt.hash(dataUser.Password, 10);

      if (foundUser) {
        throw `{Mail : This mail already exist '${dataUser.Mail}' }`;
      } else {
        //dataUser.Password=password;

        const newUser = new User(dataUser);
        // Guardamos los datos con el mètode .save(). Esta operación es asíncrona
        await newUser.save();
      }
    } else {
      throw `{Password: Invalid format password ${req.body.Password}}`;
    }
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

/* M12 */

/**
 *  Función para agregar usuarios a la base de datos "cola",
 *  primero se comprueba el último usuario de la cola y obtenemos
 *  el num tiquet, si no hay usuario dejamos por defecto el valor 0 de tiquet.
 *
 * @param {*} req Datos que recibimos del usuario mediante POST
 * @param {*} res Respuesta que devolvemos al usuario con los datos introducidos
 */

/* AÑADIR USUARIOS A LA COLA */
userManagement.colaUsers = async (req, res) => {
  try {
    const dataUser = req.body;

    //Buscamos el último usuario de la cola
    const foundLast = await ColaUser.findOne().sort({
      createdAt: "descending",
    });

    //Iniciamos el num tiquet
    let lasTiquet = 0;

    /*Si ha encontrado un usuario cambiamos el valor del tiquet con el num de 
    ese ultimo usuario y sino no cambiamos el valor del tiquet*/
    if (foundLast !== null) {
      lasTiquet = foundLast.Tiquet;
    }

    /*Creamos un Schema de ColaUser con los datos obtenidos del POST */
    const newUser = new ColaUser(dataUser);

    //Incrementamos en 1 el numero total de tiquets
    newUser.Tiquet = parseInt(lasTiquet + 1);

    // Guardamos los datos con el mètode .save(). Esta operación es asíncrona
    const espera = await newUser.save();

    res.json(espera);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

/* OBTENER USUARIOS DE LA BASE DE DATOS */

/**
 *  Función que consulta a la base de datos y nos devulve un
 *  array de objetos con los usuarios de la cola
 *
 * @param {*} req No es necesario
 * @param {*} res Devolvemos un array de objetos con los usuarios encontrados
 */
userManagement.getCola = async (req, res) => {
  try {
    var datosUser = await ColaUser.find();

    res.json([
      {
        datosUser,
      },
    ]);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

/* BORRAR USUARIOS DE LA COLA */
/**
 *  Función para borrar un usuario en concreto de la base de datos
 *
 * @param {*} req Objeto JSON con el _id del usuario
 * @param {*} res Nos devuelve un objeto del usuario eliminado de la base de datos
 */
userManagement.removeUser = async (req, res) => {
  try {
    // Guardamos el id que nos mandan del usuario a eliminar
    const dataUser = req.body._id;

    // Borramos el usuario de la base de datos
    const elimina = await ColaUser.remove({ _id: dataUser });

    res.json([elimina]);
    
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

module.exports = userManagement;
