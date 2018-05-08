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
import { Container, Content, Card, CardItem, Thumbnail, Text, Button,Center, Icon, Left, Body ,Header,Title,Right,InputGroup, Input,List,ListItem,Tab, Tabs, TabHeading} from 'native-base';



export default class frontpage extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs>
            
            <Body>

            <View style={styles.appBtn}>
            <View style={styles.appContainer}>
              <Image
                  style={styles.logo}
                  source={require('../img/newLogo.png')}/>
            </View>
            <View style={styles.buttonContainer}>
              <Button large>
                <Icon name='apps' />
              </Button>
            </View>
          </View>
            
                
                
            </Body>
           
         </Header>
        

                  <Tabs initialPage={0}>
                  <Tab heading={ <TabHeading><Icon name="home" /><Text>Home</Text></TabHeading>}>
                    <Fruit navigator={this.props.navigator} />
                  </Tab>
                  <Tab heading={ <TabHeading><Icon name="home" /><Text>My Respies</Text></TabHeading>}>
                    <Veg navigator={this.props.navigator} />
                  </Tab>
          
                </Tabs>
       
        
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
    height:100,
    width:100,
    resizeMode: 'contain',
    
  },

  signupForm:{
    width:300,
    
  },

  submitBtn:{
    marginTop: 30,
    marginLeft: 80,

  },

  appBtn:{
    flex: 1,
      flexDirection: 'row',

  },


  appContainer: {
      flex: 1,
  }


});