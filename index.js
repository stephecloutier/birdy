import { AppRegistry } from 'react-native';
import App from './App';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

const store = configureStore();

export default class Birdy extends Component {
    render() {
        return (
            <Provider store={store}>
              <App />
            </Provider>
          );
    }
}

AppRegistry.registerComponent('birdy', () => Birdy);