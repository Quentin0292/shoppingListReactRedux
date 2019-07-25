import React from 'react';
import ReactDOM from 'react-dom';
// utilise des accolades car ces méthodes sont des exports simples et non des exports defaults
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';

const articlesReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_ARTICLE':
      console.log('ADD_ARTICLE');
      console.log('action', action.type);
      action.payload.id = Date.now();
      const newState = [...state, action.payload];
      return newState;
    case 'EDIT_ARTICLE':
      console.log('EDIT_ARTICLE');
      const articleId = action.payload.id;
      return state.map(article => {
        if(article.id !== articleId){
          return article;
        }
        return action.payload
      })
    default:
      return state;
  }
};

const store = createStore(combineReducers({articles: articlesReducer}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.store = store;

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
