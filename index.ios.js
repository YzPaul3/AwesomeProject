/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import PizzaTranslator from './modules/components/PizzaTranslator';
import Flexbox from './modules/components/Flexbox';
import ListViewBasics from './modules/components/ListViewBasics';

class AwesomeProject extends Component {
  render() {
    return (
        <View>
          <Flexbox/>
          <PizzaTranslator />
          <ListViewBasics/>
        </View>
    );
  }
}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
