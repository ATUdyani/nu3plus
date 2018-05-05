import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Image
} from 'react-native';



import Fruit from './fruitpage';
import Veg from './vegpage';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button,Center, Icon, Left, Body ,Header,Title,Right,InputGroup, Input,List,ListItem,Tab, Tabs} from 'native-base';



export default class frontpage extends Component {
	render() {
    return (
      <Container>
      	<Header hasTabs>
            
            <Body>
            
                <Title>Foods</Title>
                
            </Body>
           <Right/>
         </Header>
        
        <Tabs initialPage={0}>
          <Tab heading="Fruit">
            <Fruit navigator={this.props.navigator} />
          </Tab>
          <Tab heading="Vegetable">
            <Veg navigator={this.props.navigator} />
          </Tab>
          
        </Tabs>
      </Container>
    );
  }

}