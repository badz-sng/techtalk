import { Component } from 'react';
import { View, Text, KeyboardAvoidingView, StatusBar,TextInput,TouchableOpacity,ScrollView} from 'react-native'
import {UserApi} from '../api/user'
import {PostApi} from '../api/post'
import {setStorage, getStorage} from '../helper/storage'
import {Styles} from '../Styles'
import PostWrapper from '../components/PostWrapper';
export default class Home extends Component{
    constructor(props){
        super(props)
        this.UserApi = new UserApi();
        this.PostApi = new PostApi();
        this.Request = new Request();

        this.state = {
            posts: [],
            logedInUser: "",
            postContent: ""
        }

    }

    async componentDidMount() {
        this.getLoggedInUser();
        this.getAllPosts();
    }

    getLoggedInUser = async () => {
        let user = await getStorage('user')
        this.setState({logedInUser: user.firstname})
    }

    getAllPosts = async () => {
        const postApi = new PostApi;
        const [res, error] = await postApi.posts();
        if(error){
            console.log(error)
        }else{
            this.setState({posts: res})
        }
    }

    createNewPost = async () => {
        if (this.state.postContent === ""){
            return
        }
        const postApi = new PostApi;
        const [res, error] = await postApi.uploadPost({'post': this.state.postContent});
        if(error){
            console.log("Error creatNewPost(): ",error)
        }else{
            console.log("Response from creatNewPost()" ,res)
            let data = await getStorage('user')
            console.log(data)
            this.setState({posts:[{
                "id": res.id,
                "user_id": res.user_id,
                "post": res.post,
                "created_at": res.created_at,
                "updated_at": res.updated_at,
                "user": {
                    "id": data.id,
                    "firstname": data.firstname,
                    "lastname": data.firstname,
                    "email": data.email,
                    "created_at": data.created_at,
                    "updated_at": data.updated_at
                }
            },...this.state.posts]})
            this.setState({postContent: ''})
        }
    }

    render(){
        return(
            <View style={Styles.Base}>
                <StatusBar />
                <View style={Styles.BasePost}>
                    <Text style={Styles.Greet}>
                        What's on your mind, {this.state.logedInUser}
                    </Text>
                    <View style={Styles.BasePostWrapper}>
                        <TextInput 
                        placeholder='Tell something about your day.'
                        placeholderTextColor='white'
                        style={Styles.BaseStatus}
                        onChangeText={(text)=>{
                            this.setState({postContent: text})
                        }}
                        value={this.state.postContent}
                        />
                        <TouchableOpacity style={Styles.BaseStatusButton}
                        onPress={this.createNewPost}
                        >
                            <Text style={Styles.BaseStatusButtonText}>Post</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={Styles.LogoutButton} onPress={()=>{
                        this.UserApi.logout(),
                        this.props.navigation.replace('Login',{email: '', password: ''})
                    }}>
                        <Text style={Styles.LogoutText}>
                            Logout
                        </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                {this.state.posts.map((post, index) => {
                    const date = new Date(post.created_at)
                    post.created_at = date.toDateString()
                    return(
                        <PostWrapper
                        key={index}
                        Name={post.user.firstname + " " + post.user.lastname}
                        Time={post.created_at}
                        Post={post.post}
                        />
                    )
                })}
                </ScrollView>
            </View>
        )
    }
}