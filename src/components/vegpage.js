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




import { Container, Content, Card, CardItem, Thumbnail, Text, Button,Center, Icon, Left, Body ,Header,Title,Right,InputGroup, Input,List,ListItem} from 'native-base';
var data = require('../../data.json');
var Spinner = require('react-native-spinkit');
export default class vegpage extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    searchString: '',
	  
    	source: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
    	data: data.data,
      isVisible:true
    	};
	}

	
	

	onSearchTextChanged(event) {
	  console.log('onSearchTextChanged');
    this.setState({ searchString: event.nativeEvent.text });
	  if(event.nativeEvent.text!=''){
	  
    //alert(this.state.searchString);
    const filtered = this.state.data.filter((data) => {return data.name.toLowerCase().indexOf(this.state.searchString.toLowerCase()) !== -1; });
	  console.log(this.state.searchString);
    this.setState({source: this.state.source.cloneWithRows(filtered)});
	 }
  }

	_executeQuery(query) {
    console.log(query);

    fetch(query)
    .then(res => this._handleResponse(JSON.parse(res._bodyInit)))
    .catch(error =>
       alert('error'+error)
     );
  	}
  	_handleResponse(response) {
    
   // if (response.application_response_code.substr(0, 1) === '1') {
    	//alert(response);
      this.setState({
      source: this.state.source.cloneWithRows(response),
      data:response,
      isVisible:false

    });
   // } else {
   //   alert('Location not recognized; please try again.');
   // }
  }

  componentDidMount() {
    this._handleResponse=this._handleResponse.bind(this);
  	this._executeQuery('https:/nutriplus-arunadj.c9users.io/api/vegetables');
  //	this.setState({
   //   source: this.state.source.cloneWithRows(this.state.data)

  //  });
  }
  rowPressed(indexId){
  	
  	this.props.navigator.push({
    name: "viewpage",
    passProps: {detailId: indexId,type:"veg"}
  	});
  }
  renderRow(rowData, sectionID, rowID) {
  	
    return (
    	
            <ListItem button onPress={() => this.rowPressed(rowData._id)}>
                <Thumbnail source={{uri:rowData.image_url}} />
                <Body>
                    <Text>{rowData.name}</Text>
                    <Text note>{rowData.des}. .</Text>
                </Body>
             </ListItem>
                        
        
     
    );
  }
	
	render(){
	return(
		<Container>
		
            <Content>
            	<InputGroup>
                    <Icon name="ios-search" />
                    <Input placeholder="Search" value={this.state.searchString} onChange={this.onSearchTextChanged.bind(this)}/>
                   
                </InputGroup>
                <View style={styles.sp}>
                <Spinner style={styles.spinner} isVisible={this.state.isVisible} size={60} type={'FadingCircleAlt'} color={"#C0C0C0"}/>
                </View>
                <ListView
			        dataSource={this.state.source}
			        renderRow={this.renderRow.bind(this)} enableEmptySections={true}/>
                
            </Content>
        </Container>
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
   sp:{
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    marginTop:30,
    marginBottom: 50
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