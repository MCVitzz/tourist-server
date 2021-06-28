const express = require('express');
const app = express();
const dotenv = require('dotenv');
const serveStatic = require('serve-static');
const Database = require('./database');

//Config environment and body parsing
dotenv.config();
app.use(express.json());

//Static files
app.use(serveStatic(__dirname + '/public'));

//Connect to Database
Database.setConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectionLimit: 10,
});

//Setup Routes
app.get('/', (req, res) => res.send('Welcome to the Tourist API'));
app.use('/api/poi', require('./routes/pointOfInterestRoutes'));
app.use('/api/comment', require('./routes/pointOfInterestCommentRoutes'));
app.use('/api/user', require('./routes/userRoutes'));

//Connect server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));