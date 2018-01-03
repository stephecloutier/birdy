/**
 * Birdy
 * https://github.com/stephecloutier/birdy
 * Started on 03/01/18
 */

import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import {Form} from './src/components/Form';
import reducers from './src/reducers'


export default class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View style={styles.container}>
                    <Text>
                        Birdy
                    </Text>
                    <Form />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
