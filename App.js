import React from 'react';
import Route from './src/route';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from './src/redux/reducer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
export default App = () => (
    <Provider store={store} >
      <Route />
    </Provider>
);