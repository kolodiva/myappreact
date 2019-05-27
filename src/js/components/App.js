// src/js/components/App.jsx
import React from "react";
import List from "./List.js";
import Form from "./Form.js";

import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

	render() {

		return(

	  <div className="row mt-5">
	    <div className="col-md-4 offset-md-1">
	      <h2>Articles</h2>
	      <List />
	    </div>
	    <div className="col-md-4 offset-md-1">
	      <h2>Add a new article</h2>
	      <Form />
	    </div>
	  </div>
	  );
  }
}

export default App;