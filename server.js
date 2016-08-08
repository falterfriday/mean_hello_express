//load the express module
var express = require('express');
//invokes var express and stores in var app
var app = express();
//handles root route '/' and responds with 'hello express'
app.get('/', function(request, response) {
  response.send('<h1>Hello Express</h1)');
});
//tells the expres app to listen on port XXXX
app.listen(8000, function() {
  console.log('listening on port 8000');
});
//that's it!
//well... i still need to install express
