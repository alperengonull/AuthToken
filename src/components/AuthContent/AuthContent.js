import { StyleSheet, Text, View,Alert } from 'react-native'
import React,{useState} from 'react'

import AuthForm from '../AuthForm/AuthForm'
import ButtonWhite from '../ButtonWhite/ButtonWhite'
import { useNavigation } from '@react-navigation/native'

export default function AuthContent({ isLogin,onAuthenticate }) {


    const [credentialsInvalid, setCredentialsInvalid] = useState({
        email: false,
        password: false,
        confirmEmail: false,
        confirmPassword: false
    })

    const navigation = useNavigation();








    const submitHandler = (credentials) => {
       let { email, confirmEmail, password, confirmPassword } = credentials

       email = email.trim()
       password = password.trim()


        const emailIsValid = email.includes('@')
        const passwordIsValid = password.length > 6
        const emailsAreEqual = email === confirmEmail
        const passwordsAreEqual = password === confirmPassword

        if (!emailIsValid || !passwordIsValid || (!isLogin && (!emailsAreEqual || !passwordsAreEqual))) {
            Alert.alert('Invalid input', 'Please check your input', [{ text: 'Okay' }])

            setCredentialsInvalid({
                email: !emailIsValid,
                password: !passwordIsValid,
                confirmEmail: !emailsAreEqual || !emailIsValid,
                confirmPassword: !passwordsAreEqual  || !passwordIsValid
            })
            return;
        }

        onAuthenticate({email,password})
    }

    const switchScreen = () => {
        if (isLogin) {
            navigation.navigate('Signup')
        } else {
            navigation.navigate('Login')
        }
    }

    return (
        <View style={styles.container} >
            <AuthForm credentialsInvalid={credentialsInvalid} isLogin={isLogin} onSubmit={submitHandler} />
            <View>
                <ButtonWhite onPress={switchScreen}>
                    {isLogin ? 'Sign Up' : 'Login'}
                </ButtonWhite>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blueviolet',
        marginTop: 50,
        padding: 15,
        borderRadius: 20,
        marginHorizontal: 20,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4

    }
})