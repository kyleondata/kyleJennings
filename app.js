var express = require('express');
var app = express();

app.use(express.static('app'));

app.set('port', (process.env.PORT || 5000));

var server = app.listen(app.get('port'), function(){  
  console.log('running...');
});

