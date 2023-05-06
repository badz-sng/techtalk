import { Component } from "react";
import { View, Text, KeyboardAvoidingView, StatusBar, Image, TouchableOpacity} from 'react-native'
import {UserApi} from '../api/user'
import {setStorage, getStorage} from '../helper/storage'
import {Styles} from '../Styles'
import UserInput from '../components/UserInput'
import UserButton from "../components/UserButton";
export default class Login extends Component{
    constructor(props){
        super(props)
        this.UserApi = new UserApi()
        this.state = {
            email: "",
            password: "",
            route: null,
            message: ""
        }
    }
    componentDidMount(){
        this.setState({email: "", password: ""})
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
                    <Text
                    style={Styles.BaseTitle}>
                        Login
                    </Text>
                    <UserInput 
                    Title="Email" 
                    Placeholder="Enter your email" 
                    Input={(email)=>{
                        this.setState({ email : email})
                    }}
                    />
                    <UserInput 
                    Title="Password" 
                    Placeholder="Enter your password" 
                    isSecured={true} 
                    Input={(password)=>{
                        this.setState({ password : password})
                    }}
                    />
                    <UserButton 
                    Title="Login"
                    pressEvent={async ()=>{
                        let [res, error] = await this.UserApi.login(this.state.email, this.state.password)
                        if(error){
                            this.setState({message: error})
                        }else{
                            setStorage('user', res)
                            let user = await getStorage('user')
                            console.log('USER: ',user.token)
                            console.log(res.token)
                            console.log(res)
                            this.setState({route: "Home"})
                            this.props.navigation.navigate(this.state.route)
                        }
                    }}
                    navigation={this.props.navigation}
                    />
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Register")}}>
                        <Text style={Styles.BaseLinks}>
                            Don't have an account? Register here.
                        </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}