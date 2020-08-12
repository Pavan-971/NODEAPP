const express = require('express');
const bodyParser = require('body-parser');
const app = express()

app.use(express.static('/tmp/node-app-inst/Web-app/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('/tmp/node-app-inst/Web-app/views/index');
})
app.post('/', function (req, res) {
  console.log(req.body.city);
  res.render('/tmp/node-app-inst/Web-app/index');  
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

