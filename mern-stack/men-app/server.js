const express = require('express')
const app = express()
const cors = require('cors')

const {loginUser, registerUser} = require("./controllers/user.controller");

app.use(cors());
app.use(express.json());


app.post('/users/login', loginUser);

app.post('/users/register', registerUser);


app.listen(8080, () => {
    console.log('Server is runing on port 8080');
})