import React, {Component} from 'React';
import {AppRegistry, Text, View} from 'react-native';

export default class Component1 extends Component {
  constructor(props){
      super(props);
      this.state = {
          name: 'Nelson',
          message: this.props.message
      }
  }
  
  static defaultProps = {
      message: 'Hi There'
  }

  render(){
      console.log('HELLO');
    return(
      <View>
        <Text>{this.state.name}</Text>
        <Text>{this.state.message}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Component1', () => Component1);