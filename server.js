var db = require("./config/config");
var app = require("./config/express")();
var port = 9000

app.listen(port, function() {
  console.log("Listening on port" + port);
});

module.exports = app;
