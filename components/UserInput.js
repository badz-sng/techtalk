import { Component } from "react";
import { View, Text , TextInput, StyleSheet} from "react-native";

export default class UserInput extends Component{
    constructor(props){
        super(props)
            this.state={
                isSecured : true
            }
        }
    render(){
        return(
            <View style={Styles.Base}>
                <Text
                    style={Styles.BaseTitle}
                >{this.props.Title}</Text>
                {this.props.isSecured == this.state.isSecured ? <TextInput 
                    placeholder={this.props.Placeholder}
                    placeholderTextColor='#657786'
                    style={Styles.BaseTextBox}
                    onChangeText={this.props.Input}
                    secureTextEntry={true}
                />: <TextInput 
                placeholder={this.props.Placeholder}
                placeholderTextColor='#657786'
                style={Styles.BaseTextBox}
                onChangeText={this.props.Input}
            />}
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    Base:{
        padding: 10,
        margin: 5
    },
    BaseTitle:{
        color: '#657786',
        fontSize: 20
    },
    BaseTextBox:{
        borderColor: '#AAB8C2',
        backgroundColor: '#14171A',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        color: '#657786',
    }

})