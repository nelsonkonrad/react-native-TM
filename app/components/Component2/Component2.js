import React, { Component } from 'React';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight } from 'react-native';


export default class Component2 extends Component {
    
    onPress() {
        console.log();
    }
    
    render() {
        return (
            <View>
                <View style={styles.myView}>
                    <Text style={styles.myText}>Hello Nelson</Text>
                </View>
                <View style={styles.container}>
                    <TouchableHighLight onPress={this.onPress}>
                        <View style={styles.v1}>
                            <Text>View 1</Text>
                        </View>
                    </TouchableHighLight>
                    <View style={styles.v2}>
                        <Text>View 2</Text>
                    </View>
                    <View style={styles.v3}>
                        <Text style={styles.vText}>View 3</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    myView: {
        backgroundColor: 'blue'
    },
    myText: {
        color: 'white'
    },
    container: {
        flexDirection: 'row',
        height: 100
    },
    v1: {
        flex: 1,
        backgroundColor: 'red',
        padding: 10
    },
    v2: {
        flex: 1,
        backgroundColor: 'green',
        padding: 10
    },
    v3: {
        flex: 1,
        backgroundColor: 'black',
        padding: 10
    },
    vText: {
        color: 'white'
    }
});

AppRegistry.registerComponent('Component2', () => Component2);