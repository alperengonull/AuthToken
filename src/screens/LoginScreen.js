import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import AuthContent from '../components/AuthContent/AuthContent'
import Loading from '../components/Loading/Loading'


export default function LoginScreen() {

  const [isAuthanticating, setIsAuthanticating] = useState(false)
  
  async function loginHandler ({email, password}) {
    setIsAuthanticating(true)
    await login(email, password)
    setIsAuthanticating(false)
  }

  if (isAuthanticating) {
    return <Loading />
  }

  return (
    <AuthContent isLogin onAuthenticate={loginHandler} />
  )
}

const styles = StyleSheet.create({})