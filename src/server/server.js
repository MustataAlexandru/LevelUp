const express = require('express');
const app = express();
const cors = require('cors');
const http = require("http");
const server = http.createServer(app);

//Enabling passing data to the body of the req
app.use(express.json({ extended: false }));
app.use(cors());

const PORT = 3001;

app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/login'));
app.use('/course',require('./routes/course'));

server.listen(3001, () => console.log(`Server started on port ${PORT}`));