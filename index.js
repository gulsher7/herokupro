const express = require('express')
const app = express();

app.set('port', process.env.PORT || 8000);
const port = app.get('port');
 
app.get('/', function (req, res) {
  res.send('Hello World, from ExpressJs.....!!!')
})
app.listen(port, function(){
  console.log('server running at Port ' + port);
})
