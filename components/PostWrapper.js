import { Component } from "react";
import {View, Text, Image, StyleSheet} from 'react-native'

export default class PostWrapper extends Component{
    render(){
        return(
            <View style={styles.Base}>
                <View style={styles.ImageWrapper}>
                    <Image 
                    style={styles.Image} 
                    source={require('../images/egg.jpg')}
                    />
                </View>
                <View style={styles.PostWrapper}>
                    <Text style={styles.Name}>{this.props.Name}</Text>
                    <Text style={styles.Time}>{this.props.Time}</Text>
                    <View style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            width: 300
                        }}/>
                    <Text style={styles.Post}>{this.props.Post}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Base:{
        flexDirection: 'row',
        padding: 5,
        margin: 5,
        borderWidth: 1,
        backgroundColor: '#151f29',
        borderRadius: 10,
    },
    ImageWrapper:{
        flexDirection: 'column',
        padding: 5,
    },
    PostWrapper:{
        flexDirection: 'column',
        flexShrink: 1
    },    
    
    Image:{
        height: 50,
        width: 50,
        borderRadius: 50
    },
    Name:{
        fontSize: 20,
        color: 'white',
        paddingTop: 10
    },
    Time:{
        fontSize: 15,
        color: '#657786',
        paddingBottom: 5
    },
    Post:{
        fontSize: 20,
        color: '#657786',
        marginBottom: 10
    }
})