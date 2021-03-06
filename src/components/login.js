import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Left,Body,Title,Right } from 'native-base';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class FormExample extends Component {

 signupPressed(indexId){
    
    this.props.navigator.push({
    name: "signup",
    });
  }

  submitPressed(indexId){
    
    this.props.navigator.push({
    name: "homepage",
    });
  }

  forgotPressed(indexId){
    
    this.props.navigator.push({
    name: "mainTabs",
    });
  }
  comeback(){

    this.props.navigator.pop();
  }

  render() {
    return (
      <Container>

            <View style={{alignItems: 'center'}}>
                
                    <Button transparent onPress={this.comeback.bind(this)}>
                        <Icon name='arrow-left'/>
                    </Button>
                              
             </View>

          <View style={{marginLeft: 260}}>
            <Button transparent success onPress={() => this.signupPressed()}><Text style={{fontWeight: 'bold'}}>Sign Up</Text></Button>
          </View>
          <Content>
            <View style={styles.wrapper}>
              <View style={styles.titleWrapper}>

                <Image
                  style={styles.logo}
                  source={require('../img/newLogo.png')}/>

                <Form>

                <View  style={styles.loginForm}>

                  <Item>
                    <Icon active name='user' size={20}/>
                    <Input placeholder='Username'/>
                  </Item>
                  <Item>
                    <Icon active name='lock' size={20} />
                    <Input placeholder='Password'/>
                  </Item>
                
                </View>

                  
                </Form>

                
                <View style={styles.submitBtn}>
                  <Button 
                  style={{width: 150, backgroundColor:'#a4da22'}} 
                  onPress={() => this.submitPressed()}>
                  <Text style={{color:'#ffffff',marginLeft: 30,fontSize: 18 }}>Submit</Text>
                  </Button>
                </View>

                <View style={styles.forgotBtn}>
                  <Button transparent onPress={() => this.forgotPressed()}><Text>Forgot Password?</Text></Button>
                 </View>

                 <View style={styles.Text}>
                  <Text> Or</Text>
                  <Text> Log In with</Text>
                 </View>

                 <View style={styles.container}>
                  <View style={styles.buttonContainer}>
                    <Button style={{backgroundColor:'#4267B2'}}>
                        <Icon name='facebook' size={25} color='white' />
                        <Text style={{color:'#ffffff'}}> Facebook</Text>
                      </Button>
                  </View>
                  <View style={styles.buttonContainer}>
                  <Button style={{backgroundColor:'#d34836'}}>
                      <Icon name='google' size={25} color='white' />
                      <Text style={{color:'#ffffff'}}>  Google</Text>
                    </Button>
                  </View>
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

  loginForm:{
    width:300,
    
  },

  submitBtn:{
    marginTop: 30,
    marginLeft: 80,

  },

  forgotBtn:{
    marginLeft: 80,

  },

  Text:{    
    justifyContent:'center',
    alignItems:'center'
  },

  container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
      marginLeft: 50,


    },

  buttonContainer: {
      flex: 1,
  }


});