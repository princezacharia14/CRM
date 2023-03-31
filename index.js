require('dotenv').config();
require('dotenv-flow').config({ path: './env/'});
const express = require('express');
const db = require('./app/config/db');
const app = express();
global.logger = require('./app/config/winston');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
db.connectToMongoDB();


app.use(express.json());
app.use(bodyParser.urlencoded({ extended :  true}));

app.use(express.json())

app.use(cors());

const onServerStarted = () => { 
    logger.info(`Server started on ${PORT}`) 
};
app.listen(PORT, onServerStarted());

app.use(process.env.API_VERSION , require('./app/modules/authentication/authetication.route'));
