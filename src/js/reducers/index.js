import { ADD_ARTICLE } from "../constants/action-types";
const initialState = {
  articles: []
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {

  	const tmp = Object.assign( {}, state, {articles: state.articles.concat(action.payload)} );
  	console.log( state.articles.concat(action.payload) );
    return tmp;
  }
  return state;
}
export default rootReducer;