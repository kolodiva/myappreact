// routes/note_routes.js
const  dateFormat = require('dateformat');


module.exports = (app, db) => {

  app.put('/notes/:id', (req, res) => {

  	const text = 'update test set name = $1 where id = $2 returning *';
  	const values = [ req.body.title, req.params.id ]
    
	db.query(text, values, (error, result) => {
	  if ( error ) {
	    res.send(error.stack)
	  } else {
	  		res.send(result.rows[0]);	
	  }
	});

  });
  
  app.delete('/notes/:id', (req, res) => {

  	const text = 'delete from test where id =  $1 returning *';
  	const values = [ req.params.id ]
    
	db.query(text, values, (error, result) => {
	  if ( error ) {
	    res.send(error.stack)
	  } else {
	  		res.send(result.rows[0]);	
	  }
	});

  });
  
  app.get('/notes/:id', (req, res) => {

  	const text = 'select * from test where id =  $1';
  	const values = [ req.params.id ]
    
	db.query(text, values, (error, result) => {
	  if ( error ) {
	    res.send(error.stack)
	  } else {

	  	if ( result.rows.length === 0) {
			res.send('Запись с таким ключом НЕ найдена.');
	  	} else {
	  		res.send(result.rows[0]);	
	  	}
	    
	  }
	});

  });
  
  app.post('/notes', (req, res) => {
    // Здесь будем создавать заметку.
	
	//console.log( req.body.title, req.body.body )
	//const text = 'SELECT * from test'
	const dateNow = dateFormat(new Date() + 3*60*60*1000, 'yyyy-mm-dd HH:mm:ss');

	const text = 'INSERT INTO test(name, article, date_added) VALUES($1, $2, $3) RETURNING *'
	const values = [ req.body.title, req.body.body, dateNow ]

	// callback
	db.query(text, values, (error, result) => {
	  if (error) {
	    res.send(error.stack)
	  } else {
	    res.send(result.rows[0]);
	  }
	});


  });
}; 

