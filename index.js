var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

var connectionString = "postgres://ryandurrant@localhost/sandbox";

// ------------------MAINTAIN THIS ORDER--------------------
var app = module.exports = express();
var controller = require('./controller.js');
//----------------------------------------------------------

app.use(bodyParser.json());
app.use(cors());

var massiveInstance = massive.connectSync({connectionString : connectionString});

app.set('db', massiveInstance);

var db = app.get('db');

// db.new_plane(function(err, planes){
//     console.log(err, "plane added");
// });

// db.get_planes(function(err, planes){
//     console.log(err, planes);
// });
controller.getPlanes();

app.listen('3000', function(){
  console.log("Successfully listening on : 3000");
});
