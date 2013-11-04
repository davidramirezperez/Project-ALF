'use strict';

exports.picture = function (req, res) {
    
    var hash = require("crypto").createHash("md5").update(req.files.file.lastModifiedDate+"").digest("hex");
    var serverPath = process.cwd() + "/app/images/" + hash + "_" + req.files.file.name;

    require('fs').rename(req.files.file.path, serverPath, function (error) {
        if (error) {
            res.send({
                error: 'Ah crap! Something bad happened'
            });
            return;
        }
        res.send({
            path: serverPath
        });
    });



    //res.send("ok");

};

exports.mappingById = function (req, res) {
    var id = req.params.id;
    if(id==1){
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
                url: "#1abc9c",
                show: true
            }, {
                x: 100,
                y: 0,
                w: 100,
                h: 100,
                c: "#3498db",
                z: 2,
                url: "#3498db",
                show: false
            }, {
                x: 0,
                y: 100,
                w: 100,
                h: 100,
                c: "#e67e22",
                z: 3,
                url: "#e67e22",
                show: false
            }, {
                x: 100,
                y: 100,
                w: 100,
                h: 100,
                c: "#8e44ad",
                z: 4,
                url: "#8e44ad",
                show: false
            }, {
                x: 50,
                y: 50,
                w: 100,
                h: 100,
                c: "#bdc3c7",
                z: 5,
                url: "#bdc3c7",
                show: false
            }),
            circles: new Array(1, 2, 3, 4)
        };
    }
    else{
        var map = {
            /* necesary*/
            parent: {
                w: 704,
                h: 704
            },
            rectangles: new Array({
                x: 0,
                y: 0,
                w: 200,
                h: 200,
                z: 1,
                url: "url('images/d6ed7f3453e60a15890e17681a7f1667_img-tl.jpg')",
                show: true
            }, {
                x: 500,
                y: 50,
                w: 100,
                h: 100,
                z: 2,
                url: "url('images/138e5cf6b0a37f40e7e3b2b1fbe62d8a_img-tr.jpg')",
                show: false
            }, {
                x: 0,
                y: 200,
                w: 500,
                h: 150,
                z: 3,
                url: "url('images/d39973822f8a983d5f7e3f009fa12fe9_img-cn.jpg')",
                show: false
            }, {
                x: 450,
                y: 350,
                w: 250,
                h: 350,
                z: 4,
                url: "url('images/077474bd4850cde509dc1b9f4f2c5a43_img-br.jpg')",
                show: false
            }, {
                x: 40,
                y: 350,
                w: 350,
                h: 290,
                z: 5,
                url: "url('images/dc34952a7b0321b83d5c9c5db02b6c09_img-bl.jpg')",
                show: false
            }),
            circles: new Array(1, 2, 3, 4)
        };
    }
    res.json(map);
};