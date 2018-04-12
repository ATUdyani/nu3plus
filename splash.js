import React, { Component } from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class Splash extends Component{

	componentWillMount () {
        var navigator = this.props.navigator;
        setTimeout (() => {
            navigator.replace({
                name: 'frontpage', 
            });
        }, 3000);  
    }
	render(){
		return(
			<View style={styles.wrapper}>
				<View style={styles.titleWrapper}>
					<Image
						style={styles.logo}
						source={require('./src/img/logo.png')}/>
				</View>
				<View>
				<Text style={styles.subtitle}>Powered by Group19</Text>
				</View>
			</View>

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