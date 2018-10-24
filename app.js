var express = require('express');
var app = express();
var server = require('http').Server(app);

var io = require('socket.io')(server);

var mat = require('./modules/matrix');
var matrix = mat();

var bonus = require("./modules/bonus")

var cool = require("./modules/cool")

var predator = require("./modules/predator")

var grasseater = require("./modules/grasseater")

var grass = require("./modules/grass")

app.use(express.static('public'));

app.get('/', function(req, res){
  res.redirect('index.html');
});


server.listen(3000);

io.on("connection", function(socket){
  socket.emit('receive matrix', matrix);

  var interval = setInterval( function(){
                    socket.emit('redraw', matrix);
                  }, 200);
});