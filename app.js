const express = require('express');
const app = express();

const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http').Server(app);
// const path = require('path');

dotenv.config();

const users = require('./routes/users');

app.use(express.json());
app.use(cors());

app.use('/users', users);

const PORT = process.env.PORT || 3005;

http.listen(PORT, () => {
  console.log(`NodeJS server started at port ${PORT}.`);
});
