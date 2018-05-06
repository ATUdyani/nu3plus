import React, { Component } from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button } from 'native-base';

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
						<Button success onPress={() => this.signupPressed()}><Text>Sign Up</Text></Button>
					</View>

					<View style={styles.loginBtn}>
						<Text >{"\n"}Already a user?</Text>					
						<Button transparent success onPress={() => this.loginPressed()}><Text>Log In</Text></Button>
					</View>
				</View>

				

				<View>
				<Text style={styles.subtitle}></Text>
				</View>
			</View>

		);
	}
}

const styles=StyleSheet.create({

	wrapper:{
		backgroundColor:'#e5e5e5',
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

	},

	signupBtn:{
		marginTop: 100,
		marginLeft: 80,

	},

	description:{
		marginTop: 50
	},

	loginBtn:{
		marginLeft: 80,

	},
	

});