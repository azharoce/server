const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
var http = require('http');
mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});
app.get('/baru', (req, res) => {
    res.json({"message": "sss"});
});
// Require Notes routes
require('./app/routes/note.routes.js')(app);
// listen for requests
// app.listen(5000, () => {
//     console.log("Server is listening on port 3000");
// });

http.createServer(app).listen(process.env.PORT || 5000);

