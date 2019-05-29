// server.js

const  bodyParser 		= require('body-parser');

const express        	= require('express');
const app            	= express();

const database = require('./src/js/pg/index.js');

const port = 8000;

app.use(bodyParser.urlencoded( { extended: true } ) );

require('./app/routes/index.js')(app, database);

app.listen(port, () => {
  console.log('We are live on ' + port);
});