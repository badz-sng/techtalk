import { Component } from "react";
import { View, Text, KeyboardAvoidingView, StatusBar, Image, TouchableOpacity, ScrollView} from 'react-native'
import {UserApi} from '../api/user'
import {setStorage} from '../helper/storage'
import {Styles} from '../Styles'
import UserInput from '../components/UserInput'
import UserButton from "../components/UserButton";

export default class Register extends Component{
    constructor(props){
        super(props)
        this.UserApi = new UserApi()
        this.state = {
            email: "",
            password: "",
            firstname: "",
            lastname: ""
        }
    }
    registerUser = async (f_name,l_name,email,password) => {
        let res = await this.UserApi.register(f_name,l_name,email,password)
    }
    render(){
        return(
            <View style={Styles.Base}>
                <StatusBar backgroundColor='#14171A' />
                <View style={Styles.BaseImage}>
                    <Image 
                    style={{width: 300, height: 300,}}
                    source={require('../images/logo_transparent.png')}
                    />
                </View>
                <KeyboardAvoidingView style={Styles.BaseForm}>
                    <Text style={Styles.BaseTitle}>Register</Text>
                    <ScrollView>
                        <UserInput 
                        Title="First Name" 
                        Placeholder="Enter your First Name" 
                        Input={(firstname)=>{
                            this.setState({firstname: firstname})
                        }}
                        />
                        <UserInput 
                        Title="Last Name" 
                        Placeholder="Enter your Last Name" 
                        Input={(lastname)=>{
                            this.setState({lastname: lastname})
                        }}
                        />
                        <UserInput 
                        Title="Email" 
                        Placeholder="Enter your Email"  
                        Input={(email)=>{
                            this.setState({email: email})
                        }}
                        />
                        <UserInput 
                        Title="Password" 
                        Placeholder="Enter your password" 
                        isSecured={true} 
                        Input={(password)=>{
                            this.setState({password: password})
                        }}
                        />
                    </ScrollView>
                    <UserButton Title="Register" 
                    pressEvent={()=>{
                        if(!(this.state.firstname.trim() && this.state.lastname.trim() && this.state.email.trim() && this.state.password.trim())){
                            alert("Some Fields are Empty")
                            return null
                        }
                        this.registerUser(this.state.firstname.trim(), this.state.lastname.trim(),this.state.email.trim(),this.state.password.trim())
                    }}
                    Screenroute="Login"
                    />
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Login")}}>
                        <Text style={Styles.BaseLinks}>
                            Already have an account? Login here.
                        </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}