const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World, from ExpressJs.....!!!')
})
app.listen(3000)
console.log('server running at Port 3000');