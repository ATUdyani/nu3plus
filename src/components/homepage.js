import React, { Component } from 'react';
import {View, Text, Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, SocialIcon} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Home extends Component{

	componentWillMount () {
        var navigator = this.props.navigator;
        /*setTimeout (() => {
            navigator.replace({
                name: 'frontpage', 
            });
        }, 3000); */ 
    }

fruitPressed(indexId){
    
    this.props.navigator.push({
    name: "fruitpage",
    });
  }

vegPressed(indexId){
    
    this.props.navigator.push({
    name: "vegpage",
    });
  }

  recipePressed(indexId){
    
    this.props.navigator.push({
    name: "recipepage",
    });
  }


	render(){
		return(
			<View style={styles.wrapper}>
				<View style={styles.titleWrapper}>

					<Image
						style={styles.logo}
						source={require('../img/newLogo.png')}/>

					<View style={styles.fruitBtn}>
						<Button 
						style={{width: 280, backgroundColor:'#a4da22'}}  onPress={() => this.fruitPressed()}>
						<Text style={{color:'#ffffff',marginLeft: 50,fontSize: 18 }}>Fruits</Text>
						</Button>
					</View>

					<View style={styles.fruitBtn}>
						<Button 
						style={{width: 280, backgroundColor:'#a4da22'}}  onPress={() => this.vegPressed()}>
						<Text style={{color:'#ffffff',marginLeft: 50,fontSize: 18 }}>Vegetables</Text>
						</Button>
					</View>

					<View style={styles.fruitBtn}>
						<Button 
						style={{width: 280, backgroundColor:'#a4da22'}}  onPress={() => this.recipePressed()}>
						<Text style={{color:'#ffffff',marginLeft: 50,fontSize: 18 }}>Recipes</Text>
						</Button>
					</View>

					
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
		
	    height:200,
	    width:200,
	    resizeMode: 'contain',
	    marginLeft: 50,
	    marginTop: 0,
	    marginBottom:100

	},

	fruitBtn:{
		marginTop: 40,
		marginLeft: 50,
		marginRight: 50
	},

	vegBtn:{
		marginTop: 60,
		marginLeft: 50,
		marginRight: 50

	},
	recipBtn:{
		marginTop: 80,
		marginLeft: 50,
		marginRight: 50
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