const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors());
app.use(express.json());


app.post('/users/login', (req, res) => {
    res.send('POST Request for Login');
});

app.listen(8080, () => {
    console.log('Server is runing on port 8080');
})