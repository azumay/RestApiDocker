require("./../db/connection");
const User = require("./../db/models/user.schema");

//obj para exportar
const userManagement = {};

// Definir mètode registerUser()

userManagement.loginUser = async (req, res) => {
  res.send("POST Request for Login");
};

userManagement.registerUser = async (req, res) => {
  res.send("POST Request for Register");
  try {
    
    const dataUser = req.body;

    const newUser = new User(dataUser);

    await newUser.save();

  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

module.exports = userManagement;
