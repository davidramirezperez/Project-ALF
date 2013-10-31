'use strict';
exports.mappingById = function (req, res) {
    //var id = req.params.id;

    var map = {
        /*Not necesary*/
        parent: {
            w: 200,
            h: 200
        },
        rectangles: new Array({
            x: 0,
            y: 0,
            w: 100,
            h: 100,
            c: "#1abc9c",
            z: 1,
            url:"#1abc9c",
            show:true
        }, {
            x: 100,
            y: 0,
            w: 100,
            h: 100,
            c: "#3498db",
            z: 2,
            url:"#3498db",
            show:false
        }, {
            x: 0,
            y: 100,
            w: 100,
            h: 100,
            c: "#e67e22",
            z: 3,
            url:"#e67e22",
            show:false
        }, {
            x: 100,
            y: 100,
            w: 100,
            h: 100,
            c: "#8e44ad",
            z: 4,
            url:"#8e44ad",
            show:false
        }, {
            x: 50,
            y: 50,
            w: 100,
            h: 100,
            c: "#bdc3c7",
            z: 5,
            url:"#bdc3c7",
            show:false
        }),
        circles: new Array(1, 2, 3, 4)
    };

    res.json(map);

};