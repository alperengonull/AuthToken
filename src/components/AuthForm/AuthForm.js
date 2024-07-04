import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'

export default function AuthForm({ isLogin,onSubmit,enteredValue, credentialsInvalid }) {

  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState('')
  const [enteredPassword, setEnteredPassword] = useState('')
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('')
  
  const {
    email: emailIsInvalid,
    password: passwordIsInvalid,
    confirmEmail: emailsDontMatch,
    confirmPassword: passwordDontMatch
  } = credentialsInvalid
  
  console.log(emailIsInvalid, emailsDontMatch, passwordIsInvalid, passwordDontMatch)


  const submitHandler = () => {
   onSubmit({
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword
   })
  }




  function updateInput(inputType, enteredValue) {
    switch (inputType) {
      case 'email':
        setEnteredEmail(enteredValue);
        break;
      case 'confirmEmail':
        setEnteredConfirmEmail(enteredValue);
        break;
      case 'password':
        setEnteredPassword(enteredValue);
        break;
      case 'confirmPassword':
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }



  return (
    <View>
      <Input
        label="Email"
        keyboardType="email-address"
        onUpdateValue={updateInput.bind(this, 'email')}
        value={enteredEmail}
        isInvalid={emailIsInvalid}

      />

      {!isLogin && (
        <Input
          label="Confirm email"
          keyboardType="email-address"
          onUpdateValue={updateInput.bind(this, 'confirmEmail')}
          value={enteredConfirmEmail}
          isInvalid={emailsDontMatch}
        />
      )}

      <Input
        label="Password"
        secure
        onUpdateValue={updateInput.bind(this, 'password')}
        value={enteredPassword}
        isInvalid={passwordIsInvalid}
      />

      {!isLogin && (
              <Input
                label="Confirm password"
                secure
                onUpdateValue={updateInput.bind(this, 'confirmPassword')}
                value={enteredConfirmPassword}
                isInvalid={passwordDontMatch}
              />
            )}

      <View style={styles.buttons}>
        <Button onPress={submitHandler}> {isLogin ? 'Sign In' : 'Sign Up'} </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    marginVertical: 20,
  }
})