require('dotenv').config();
require('dotenv-flow').config({ path: './env/'});
const express = require('express');
const db = require('./app/config/db');
const app = express();
global.logger = require('./app/config/winston');
const PORT = process.env.PORT || 5000;

db.connectToMongoDB();

app.use(express.json());

app.use(process.env.API_VERSION , require('./app/modules/user/user.route'));



const onServerStarted = () => { 
    logger.info(`Server started on ${PORT}`) 
};
app.listen(PORT, onServerStarted());