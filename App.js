import React from 'react';
import CounterReducers from './redux/reducers/CounterReducers';
import { StyleSheet, Text, View } from 'react-native';
import CounterContainer from './redux/containers/CounterContainers';

var store = createStore(CounterReducers);
export default class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
        <CounterContainer/>
      </Provider>
    );
  }
}

