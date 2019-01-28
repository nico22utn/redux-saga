import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CounterContainer from './redux/containers/CounterContainers';
import allReducers from './redux/reducers/Index';

var store = createStore(allReducers);
export default class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
        <CounterContainer/>
      </Provider>
    );
  }
}

