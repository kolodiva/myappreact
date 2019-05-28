import ReactDOM from "react-dom";
import React from "react";

import Counter from "./js/components/Counter";

import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {

	switch(action.type) {
		
		case 'INCREMENT': return { count: state.count + 1 };
		case 'DECREMENT': return { count: state.count - 1 };

		default: return state;

	}

}

const store = createStore( reducer );

window.store = store;

// import './main.css' 
//import AppRouter from "./Routes";

// import index from "./js/index"

const Hello = () => { return <div className='container text-center' style={{fontSize: '2rem', fontWeight: 'bold', color: 'white', lineHeight: '100vh'}}>Hello Redux.</div> }

//ReactDOM.render( <Hello />, document.getElementById("root") );
ReactDOM.render( 

	<Provider store={store}>
		<Counter />
	</Provider>
	
	, document.getElementById("root") );


