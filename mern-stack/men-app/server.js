const express = require('express')
const app = express()
const cors = require('cors')

const {loginUser, registerUser, colaUsers, getCola, removeUser } = require("./controllers/user.controller");

app.use(cors());
app.use(express.json());


app.post('/users/login', loginUser);

app.post('/users/register', registerUser);

app.post('/users/cola', colaUsers);

app.get('/users/getcola', getCola);

app.post('/users/remove', removeUser);

app.listen(8080, () => {
    console.log('Server is runing on port 8080');
})