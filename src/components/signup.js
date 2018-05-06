import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button } from 'native-base';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class FormExample extends Component {


  loginPressed(indexId){
    
    this.props.navigator.push({
    name: "login",
    });
  }

  submitPressed(indexId){
    
    this.props.navigator.push({
    name: "frontpage",
    });
  }

  render() {
    return (
      <Container>

          <View style={{marginLeft: 280}}>
            <Button transparent success onPress={() => this.loginPressed()}><Text>Log In</Text></Button>
          </View>
          <Content>
            <View style={styles.wrapper}>
              <View style={styles.titleWrapper}>

                <Image
                  style={styles.logo}
                  source={require('../img/newLogo.png')}/>

                <Form>

                <View  style={styles.signupForm}>

                  <Item>
                    <Icon active name='user' size={20}/>
                    <Input placeholder='Username'/>
                  </Item>
                  <Item>
                    <Icon active name='envelope' size={20} />
                    <Input placeholder='Email Address'/>
                  </Item>
                  <Item>
                    <Icon active name='lock' size={20} />
                    <Input placeholder='Password'/>
                  </Item>
                  <Item>
                    <Icon active name='lock' size={20} />
                    <Input placeholder='Confirm Password'/>
                  </Item>

                </View>

                  
                </Form>

                
                <View style={styles.submitBtn}>
                  <Button style={{width: 150}} success onPress={() => this.submitPressed()}><Text>Submit</Text></Button>
                </View>

              </View>
            </View>
            
          </Content>
        </Container>

    );
  }
}



const styles=StyleSheet.create({

  wrapper:{
   
    justifyContent:'center',
    alignItems:'center'
  },
  subtitle:{
    color:'#34495e',
    fontWeight:'200'
  },
  titleWrapper:{
    
    justifyContent:'center'
  },

  logo:{
    flex: 1,
    height:200,
    width:200,
    resizeMode: 'contain',
    marginLeft: 50,
  },

  signupForm:{
    width:300,
    
  },

  submitBtn:{
    marginTop: 30,
    marginLeft: 80,

  },


});