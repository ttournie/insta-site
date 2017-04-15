var express = require("express");
var path = require("path");
var config = require('./config.js');
var InstagramAPI = require('instagram-api');

var app = express();
var port = process.env.PORT || 8080;
var DIST_DIR = path.join(__dirname, "src");

/////////////////////////////////////////////
// ALLOW CORS TO localhost:3000 dev server
/////////////////////////////////////////////
const allowCrossDomain = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
}

app.use(allowCrossDomain);

// Instagram Api
var insta = new InstagramAPI(config.access_token);

//Send index.html when the user access the web
/*app.get("*", function (req, res) {
  res.sendFile(path.join(DIST_DIR, "index.html"));
});*/

// Get all the pictures.
app.get("/pictures", function (req, res) {
  // Make the request to the API.
  insta.userSelfMedia()
  .then(function(result) {
    res.send(result.data);
  }, function(err){
      console.log(err);
  });
});

// Search tags.
app.get("/tags", function (req, res) {
  // Make the request to the API.
  insta.userSelfMedia(req.param("tags"))
  .then(function(result) {
    res.send(result.data);
  }, function(err){
      console.log(err);
  });
});

// Let express create the server.
var server = app.listen(port);
console.log("Server started");
