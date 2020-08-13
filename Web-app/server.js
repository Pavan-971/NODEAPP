const express = require('express');
const bodyParser = require('body-parser');
const app = express()

app.use(express.static('/tmp/NODEAPP/Web-app/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('/tmp/NODEAPP/Web-app/views/index');
})
app.post('/', function (req, res) {
  console.log(req.body.city);
  res.render('/tmp/NODEAPP/Web-app/index');  
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

