import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    Base:{
        backgroundColor: '#14171A',
        flex: 1
    },
    BaseImage:{
        flex: 2,
        paddingTop: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#14171A'
    },
    BaseForm:{
        Flex: 1,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: '#151f29',
        padding: 10,
        height: '65%'
    },
    BaseTitle:{
        fontSize: 40,
        color: '#1DA1F2',
        textAlign: 'center',
        fontWeight: '300'
    },
    BaseLinks:{
        color: '#1DA1F2',
        textAlign: 'center',
        fontWeight: '300',
    },
    BasePost:{
        borderColor: '#AAB8C2',
        backgroundColor: '#14171A',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderWidth: 1,
        padding: 10,
        margin: 5,
        color: '#657786',
    },
    BasePostWrapper:{
        flexDirection: 'row',
        justifyContent:'space-evenly',
        height: 70
    },
    BaseStatus:{
        borderColor: '#AAB8C2',
        backgroundColor: '#14171A',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderWidth: 1,
        padding: 10,
        color: '#657786',
        justifyContent:'center',
        alignContent: 'center',
        width: '70%'
    },
    BaseStatusButton:{
        borderColor: '#AAB8C2',
        backgroundColor: '#14171A',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 1,
        padding: 10,
        color: '#657786',
        justifyContent:'center',
        alignContent: 'center',
        width: '30%'
    },
    BaseStatusButtonText:{
        color: '#1DA1F2',
        textAlign: 'center'
    },
    Greet:{
        color: 'white',
        textAlign: 'center',
        paddingBottom: 10,
        fontSize: 20
    },
    LogoutButton:{
        borderWidth: 1,
        borderColor: 'red',
        padding: 10,
        marginTop: 10,
        borderRadius: 5
    },
    LogoutText:{
        color: 'red',
        textAlign: 'center',
        fontSize: 20
    }

})

export {Styles}