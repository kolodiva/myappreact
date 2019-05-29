// routes/index.js
const noteRoutes = require('./note_routes.js');

module.exports = (app, db) => {
  
  noteRoutes(app, db);
  // Тут, позже, будут и другие обработчики маршрутов 
};