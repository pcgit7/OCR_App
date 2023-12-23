const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
const dbConfig = require('./dbconfig');

app.use(express.json());

app.listen(port , () => {
    console.log(`listning on port ${port}`);
});


