/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  View,
  Image
} from 'react-native';

import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

import viewpage from './src/components/viewpage';
import frontpage from './src/components/frontpage';
import Splash from './splash';
import fruitpage from './src/components/fruitpage';
import vegpage from './src/components/vegpage';
import signup from './src/components/signup';
import login from './src/components/login';
import mainTabs from './src/components/mainTabs';
import homepage from './src/components/homepage';
import recipepage from './src/components/recipepage';


var ROUTES = {
  splash:Splash,
  viewpage:viewpage,
  frontpage:frontpage,
  vegpage:vegpage,
  fruitpage:fruitpage,
  signup:signup,
  login:login,
  mainTabs:mainTabs,
  homepage:homepage,
  recipepage:recipepage,
};
export default class nu3plus extends Component {
    renderScene(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} {...route.passProps} />;
  }
  
  render() {
    return (
      <Navigator
        
        initialRoute={ {name: 'splash'} }
        renderScene={this.renderScene}
        configureScene={ () => { return Navigator.SceneConfigs.FloatFromRight; } }/>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('nu3plus', () => nu3plus);
