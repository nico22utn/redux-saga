import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import CounterContainer from './redux/containers/CounterContainers';
import allReducers from './redux/reducers/Index';
import createSagaMiddleware from 'redux-saga'; 
import rootSaga from './redux/sagas/RootSagas';

var sagaMiddleware = createSagaMiddleware();
var store = createStore(allReducers, applyMiddleware(sagaMiddleware));
export default class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
        <CounterContainer/>
      </Provider>
    );
  }
}
sagaMiddleware.run(rootSaga);
