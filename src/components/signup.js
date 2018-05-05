import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button } from 'native-base';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class FormExample extends Component {

 signupPressed(indexId){
    
    this.props.navigator.push({
    name: "signup2",
    });
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>

          <Button onPress={() => this.signupPressed()}><Text> Light </Text></Button>

          <Image
            style={styles.logo}
            source={require('../img/logo.png')}/>

        </Content>
      </Container>

    );
  }
}



const styles=StyleSheet.create({

  wrapper:{
    backgroundColor:'#e5e5e5',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  subtitle:{
    color:'#34495e',
    fontWeight:'200'
  },
  titleWrapper:{
    
    flex:1,
    justifyContent:'center'
  },
  logo:{
    flex: 1,
    height:200,
    width:200,
    resizeMode: 'contain'
  }

});