import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  View,
  Image
} from 'react-native';


import ProgressBar from 'react-native-progress';
var data = require('../../data.json');
import { Container, Content, Card, CardItem, Thumbnail,Header,Title,Right, Text, Button, Icon, Left, Body } from 'native-base';
export default class viewpage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width:'',
      nutsource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
      data:''
    }
  }

  comeback(){

    this.props.navigator.pop();
  }
   componentDidMount() {
    var detailid=this.props.detailId;

    //var detail = data.data[detailid];
    if(this.props.type =="veg"){
    this._executeQuery('https://nu3plus-api-arunadj.c9users.io/api/vegetables/'+detailid);
    }
    else if(this.props.type =="fruit"){
      this._executeQuery('https://nu3plus-api-arunadj.c9users.io/api/fruits/'+detailid);
    }
   // this.setState({
    //  nutsource: this.state.nutsource.cloneWithRows(detail.nutritions)

    //});
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
    var objar=[];
      for(n=0;n<response.nutritions.length;n++){
        var jsonar=JSON.parse(JSON.stringify(response.nutritions[n]));
        var jsonobj=JSON.parse(jsonar);
        //alert(jsonobj);
        objar.push(jsonobj);
      }
      //var jsonar=JSON.parse(JSON.stringify(response.nutritions));
      // var ob ={"json":jsonar}; 
     // alert(ob.json);
      this.setState({
      nutsource: this.state.nutsource.cloneWithRows(objar),
      data:response

    });
   // } else {
   //   alert('Location not recognized; please try again.');
   // }
  }
  renderNutRow(rowData, sectionID, rowID) {
    Dstyle=function(p){
      return{
      alignSelf: 'center',
      borderRadius: 5,
      height: 8,
      width:p,
      backgroundColor:'#b2892f',
      marginRight: 5
      }
    }

    return (
         
            
            <View style={styles.data}>
              <Text style={{textAlign: 'center'}}>{rowData.name}  </Text>
              <Text style={{marginLeft:30,textAlign: 'center'}}>{rowData.value}</Text>
            </View>
          
    );
  }
      render() {
     // var detailid=this.props.detailId;
     // var detail = data.data[detailid];
      
      //alert(detail.nutritions);
     
        return (
            <Container>
              <Header>
            <Left>
                <Button transparent onPress={this.comeback.bind(this)}>
                    <Icon name='arrow-back'/>
                </Button>
            </Left>
            <Body>
            
                <Title>Details</Title>
                
            </Body>
           <Right/>
         </Header>
                <Content>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Left>
                                
                                <Body>
                                    <Text style={{fontSize:20}}>{this.state.data.name}</Text>
                                    <Text note>{this.state.data.details}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image style={styles.thumb} source={{uri:this.state.data.image_url} }/>

                                <ListView
                                  dataSource={this.state.nutsource}
                                  renderRow={this.renderNutRow.bind(this)}/>

                            </Body>
                        </CardItem>
                   </Card>
                </Content>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
  thumb:{
    resizeMode: 'contain',
    width:250,
    height:200
  },
 
   dataNum: {
    color: '#CBCBCB'
  },
  container1: {
    flexDirection: 'column',
    marginTop: 6
  },
  item: {
    flexDirection: 'column',
    marginBottom: 5,
    paddingHorizontal: 10
  },
  data: {
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    alignItems: 'center',

    
  },
  bar: {
    alignSelf: 'center',

    borderRadius: 5,
    height: 8,
    width:20,
    backgroundColor:'#b2892f',
    marginRight: 5
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

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