import { Component } from "react";
import { View, Text , TouchableOpacity, StyleSheet} from "react-native";

export default class UserButton extends Component{
    render(){
        return(
            <View style={Styles.Base}>
                <TouchableOpacity style={Styles.BaseButton} onPress={()=>{
                    this.props.Screenroute ? this.props.navigation.navigate(this.props.Screenroute):null,
                    this.props.pressEvent ?  this.props.pressEvent():null
                }}>
                    <Text
                        style={Styles.BaseTitle}
                    >{this.props.Title}</Text>
                </TouchableOpacity>
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
        color: '#1DA1F2',
        fontSize: 20,
        textAlign: 'center'
    },
    BaseButton:{
        borderColor: '#1DA1F2',
        backgroundColor: '#14171A',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        color: '#1DA1F2',
    }

})