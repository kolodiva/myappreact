const  {Pool} 			= require('pg');
const db_set         	= require('../../../config/db.js');

module.exports = new Pool(db_set);

