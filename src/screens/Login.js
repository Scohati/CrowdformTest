import { StyleSheet, View, Image, TextInput, Text, TouchableOpacity } from 'react-native'
import { MainContainer, Typography, Input } from '../components'
import lock from '../assets/login/lock.png'

export default function Login() {
    return (
        <MainContainer>
            <View style={styles.container}>
                <Typography size={26} color={'#3629B7'} type={600}>Welcome Back</Typography>
                <Typography size={14} color={'#343434'} type={500}>Log in to continue</Typography>
                <Image style={styles.img} source={lock}/>

                <View style={styles.form}>
                    <View>
                        <Typography color={'#979797'} type={600} size={14}>Email</Typography>
                        <Input placeholder={'Email'} />
                    </View>
                    <View>
                        <Typography color={'#979797'} type={600} size={14}>Password</Typography>
                        <Input placeholder={'Password'} />
                    </View>
                    <TouchableOpacity style={styles.forgotPass}>
                        <Typography color={'#cacaca'}>Forgot your password ?</Typography>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.btn}>
                    <Typography color={'#fff'} type={500} size={16}>Log In</Typography>
                </TouchableOpacity>

                <View style={styles.btnText}>
                    <Typography color={'#000'} type={500} size={16}>
                        Don't have an account ?
                    </Typography>
                    <TouchableOpacity>
                        <Typography color={'#3629B7'} type={500} size={16}>
                            Sign Up
                        </Typography>
                    </TouchableOpacity>
                </View> 
            </View>
        </MainContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 24
    },
    img: {
        alignSelf: 'center',
        marginTop: 45,
        width: 180,
        height: 180
    },
    form: {
        marginTop: 45,
        gap: 18
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3629B7',
        padding: 10,
        borderRadius: 20,
        height: 54,
        marginTop: 45,
    },
    btnText: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 45,
        gap: 12
    },
    forgotPass: {
        alignItems: 'flex-end'
    }
})