var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.use(express.logger());
app.set("view options", {layout: false});
app.use(express.static(__dirname + '/views'));

app.get('/', function(request, response) {
  response.render('/views/index.html');
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
