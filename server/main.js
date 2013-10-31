/*jslint node: true */
'use strict';
var express = require('express'),
    routes = require('./routes'),
    mapping = require('./routes/mapping'),
    app = express();

app.use(express.bodyParser());

app.get('/api/awesomeThings', routes.awesomeThings);

app.get('/api/mapping/:id', mapping.mappingById);

app.post('/api/photos', mapping.picture);

app.use(function (req, res) {
    res.json({
        'ok': false,
        'status': '404'
    });
});

module.exports = app;