var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5001))
app.use(express.static(__dirname + '/public'))

app.use(express.logger());
app.set("view options", {layout: false});
app.use(express.static(__dirname + '/views'));

app.get('/', function(request, response) {
  response.sendfile(__dirname + '/views/index.html');
})

app.get('/rules', function(req, res) {
	res.sendfile(__dirname+'/public/requirements.pdf');
});

app.get("/ng", function(req, res) {
  res.redirect("/"); 
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
