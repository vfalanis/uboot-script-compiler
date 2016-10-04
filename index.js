var express = require('express');
var app = express();
require('shelljs/global');
var fs = require('fs');
var bodyParser = require('body-parser');


// set the view engine to ejs
app.set('view engine', 'ejs');

// public folder to store assets
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// routes for app
app.get('/', function(req, res) {
  res.render('index');
});

app.post('/', function(req, res) {

  var scriptext = req.body.script;

  fs.writeFileSync("/tmp/bootscript.txt", scriptext);

   var command = 'mkimage -A arm -O linux -T script -C none -a 0 -e 0 -n "boot script" -d ' +  "/tmp/bootscript.txt" + ' /tmp/boot.script';

   var version = exec(command, {async:false}).output

   var file = '/tmp/boot.script';

   res.download(file); // Set disposition and send it.

});

// listen on port 8000 (for localhost) or the port defined for heroku
var port = process.env.PORT || 8000;
app.listen(port);
