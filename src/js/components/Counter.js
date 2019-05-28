// src/js/components/App.jsx
import React from "react";
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

class Counter extends React.Component {

  increment = () => {
  		this.props.dispatch( {type: 'INCREMENT'} );
   };

   decrement = () => {
   		this.props.dispatch( {type: 'DECREMENT'} );
   };

   render() {
	
		return (
	      <div>
	        <h2>Counter</h2>
	        <div>
	          <button onClick={this.decrement}>-</button>
	          <span className='mx-2'>{this.props.count}</span>
	          <button onClick={this.increment}>+</button>
	        </div>
	      </div>
	    );

	}

}

// export default Counter;
// export default connect( (state) => { return( {count: state.count} ) } )(Counter);
export default connect(mapStateToProps)(Counter);
