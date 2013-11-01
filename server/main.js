/*jslint node: true */
'use strict';
var express = require('express'),
    routes = require('./routes'),
    mapping = require('./routes/mapping'),
    gm = require('gm'),

    app = express();

app.use(express.bodyParser());

app.get('/api/awesomeThings', function (req, res) {
    gm(process.cwd() + 'app/images/1488142ff75233bf9631555b7ec1cc0e_ninjuroid.png').size(function (err, size) {
        if (!err) {
            res.json(size);
        }else{
            res.json(err);
        }
    });
});

//app.get('/api/awesomeThings', routes.awesomeThings);

app.get('/api/mapping/:id', mapping.mappingById);

app.post('/api/photos', mapping.picture);

app.use(function (req, res) {
    res.json({
        'ok': false,
        'status': '404'
    });
});

module.exports = app;