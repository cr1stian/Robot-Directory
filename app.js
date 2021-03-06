//declaring all packages(middleware)
const express = require('express');
const mustacheExpress = require('mustache-express');
const data = require('./data.js');
const app = express();

//setting the engines
app.engine('mustache', mustacheExpress());
app.set('views','./views');
app.set('view engine', 'mustache')
app.use(express.static(__dirname + '/public'));




app.get('/', function(request, response){

  response.render('index',{
    data: data.users
  })

})

app.get('/:id', function(request, response){

  var id = request.params.id -1;

  response.render('user', {
    data: data.users[id]
  })
})












app.listen(3000, function () {
  console.log('Live from the gutter');
});
