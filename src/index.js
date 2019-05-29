import ReactDOM from "react-dom";
import React from "react";

import Counter from "./js/components/Counter";

import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import axios from 'axios';




const getCoffee = () => {
	return new Promise( resolve => { setTimeout(() => resolve('coffee ready'), 2000); } );
}

async function go() {

	try {

    	const coffee = await getCoffee();
    	console.log(coffee); 

	const wes = await axios('https://api.github.com/users/kolodiva');
    console.log(wes.data); // mediocre code 

	const wordPromise = axios('https://api.github.com/users/kolodiva');
    const userPromise = axios('https://api.github.com/users/kolodiva');
    const namePromise = axios('https://api.github.com/users/kolodiva');
    // await all three promises to come back and destructure the result into their own variables
    const [word, user, name] = await Promise.all([wordPromise, userPromise, namePromise]);
    console.log(word.data, user.data, name.data); // cool, {...}, {....}       	

	} catch(e) {console.error(e)}

}

go();

console.log('1111111111111111111111111')


// axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
//   .then(response => {
//     console.log(response.data.url);
//     console.log(response.data.explanation);
//   })
//   .catch(error => {
//     console.log(error);
//   });




// const initialState = {
//   count: 0
// };

// const reducer = (state = initialState, action) => {

// 	switch(action.type) {
		
// 		case 'INCREMENT': return { count: state.count + 1 };
// 		case 'DECREMENT': return { count: state.count - 1 };

// 		default: return state;

// 	}

// }

// const store = createStore( reducer );

// window.store = store;

// // import './main.css' 
// //import AppRouter from "./Routes";

// // import index from "./js/index"

// const Hello = () => { return <div className='container text-center' style={{fontSize: '2rem', fontWeight: 'bold', color: 'white', lineHeight: '100vh'}}>Hello Redux.</div> }

// //ReactDOM.render( <Hello />, document.getElementById("root") );

// ReactDOM.render( 

// 	<Provider store={store}>
// 		<Counter />
// 	</Provider>
	
// 	, document.getElementById("root") );


