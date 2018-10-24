var express = require('express');
var app = express();
var server = require('http').Server(app);

var io = require('socket.io')(server);

var mat = require('./modules/matrix');
var matrix = mat();

var bonus = require("./bonus")

var cool = require("./cool")

var predator = require("./predator")

var grasseater = require("./grasseater")

var grass = require("./grass")

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