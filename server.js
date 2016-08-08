var express = require ('express'),
    path = require('path'),
    bp = require('body-parser'),
    fs = require('fs');

var port = process.env.PORT || 3000,
    app = express();

var templates = fs.readdirSync(path.join(__dirname, 'auth'))
.filter((template) => {
  return template.endsWith('.html');
}).forEach((fileName) => {
  var completePath = path.join(__dirname, 'auth', fileName);
  var data = fs.readFileSync(completePath, 'utf-8');

  var replacedData = data
  .replace('%API_KEY%', JSON.stringify(process.env.API_KEY))
  .replace('%AUTH_DOMAIN%', JSON.stringify(process.env.AUTH_DOMAIN))
  .replace('%DATABASE_URL%', JSON.stringify(process.env.DATABASE_URL))
  .replace('%STORAGE_BUCKET%', JSON.stringify(process.env.STORAGE_BUCKET));

  fs.writeFileSync(completePath, replacedData, 'utf-8');
});

app.use(express.static('auth'));
app.use(bp.urlencoded({extended: false}));
app.use(bp.json());

app.get('/', function(req, res) {
    res.send('auth-temp');
});

app.listen(port, function(){
    console.log('listening on port %s', port);
});
