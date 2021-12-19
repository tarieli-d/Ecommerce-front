import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware} from 'redux';
import allReducers from './redux/allReducers.jsx';
import thunk from 'redux-thunk' //Middleware



const store = createStore(allReducers,applyMiddleware(thunk));
ReactDOM.render(
  <Suspense fallback={<div>loading...</div>}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById('root')
);
