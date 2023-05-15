//require dependencies
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const morgan = require('morgan');
// initialize express app
const app = express();

//configure settings
require('dotenv').config();
require('./config/database');

//mount middlewear
app.use(express.json()); // creates req.body
app.use(morgan('dev'));
// use middleware to help express discover the favicon file
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
// use middleware to help express discover static assets
app.use(express.static(path.join(__dirname, 'build')));

// mount routes

// API routes 
app.use('/api/users', require('./routes/api/users'));
// catch all route
app.get('/*',(req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// tell app to listen
const port = process.env.PORT || 3001;
app.listen(port, function() {
    console.log(`Express app is running on port:${port}`);
});