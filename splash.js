import React, { Component } from 'react';
import {View, Text, Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, SocialIcon} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Splash extends Component{

	componentWillMount () {
        var navigator = this.props.navigator;
        /*setTimeout (() => {
            navigator.replace({
                name: 'frontpage', 
            });
        }, 3000); */ 
    }

signupPressed(indexId){
    
    this.props.navigator.push({
    name: "signup",
    });
  }

loginPressed(indexId){
    
    this.props.navigator.push({
    name: "login",
    });
  }


	render(){
		return(
			<View style={styles.wrapper}>
				<View style={styles.titleWrapper}>

					<Image
						style={styles.logo}
						source={require('./src/img/newLogo.png')}/>


					<View style={styles.description}>
						<Text style={{textAlign: 'center',fontSize: 17}}>
							Your body is your temple.{"\n"}Keep it pure and clean,{"\n"}for the soul to reside in.
						</Text>
					</View>


					<View style={styles.signupBtn}>
						<Button style={{width: 150}} success onPress={() => this.signupPressed()}><Text>Sign Up</Text></Button>
					</View>


					<View style={styles.loginBtn}>
						<View style={styles.buttonContainer}>
							<Text style={{marginLeft: 30}} >{"\n"}Already a user?</Text>	
						</View>
						<View style={styles.buttonContainer}>
							<Button transparent success onPress={() => this.loginPressed()}><Text>Log In</Text></Button>
						</View>
					</View>

					<View style={styles.container}>
     					<View style={styles.buttonContainer}>
      						<Button>
            					<Icon name='facebook' size={25} color='white' />
            					<Text> Facebook</Text>
          					</Button>
    					</View>
    					<View style={styles.buttonContainer}>
      						<Button>
            					<Icon name='google' size={25} color='white' />
            					<Text>  Google</Text>
          					</Button>
   						</View>
  					</View>

					
				</View>

				

				<View>
				<Text style={styles.subtitle}>Powered by Group</Text>
				</View>
			</View>

		);
	}
}

const styles=StyleSheet.create({

	wrapper:{

		/*backgroundColor:'#e5e5e5',*/
		flex:3,
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

		/*backgroundColor:'#635DB7',*/
		height:150,
		width:250,
		resizeMode: 'contain',
		marginTop: 50,

	},

	signupBtn:{
		marginTop: 100,
		marginLeft: 50,

	},

	description:{
		marginTop: 50
	},

	loginBtn:{
		flex: 1,
	    flexDirection: 'row',

	},

	container: {
	    flex: 1,
	    flexDirection: 'row',
	    alignItems: 'center',
	    justifyContent: 'center',

  	},

	buttonContainer: {
	  	flex: 1,
	}
	

});