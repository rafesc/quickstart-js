var express = require ('express'),
    path = require('path'),
    bp = require('body-parser');

var port = process.env.PORT || 3000,
    app = express();

app.use(express.static('auth'));
app.use(bp.urlencoded({extended: false}));
app.use(bp.json());

app.get('/', function(req, res) {
    res.send('auth');
});

app.listen(port, function(){
    console.log('listening on port %s', port);
});