import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

export default function Input({ label, keyboardType, onUpdateValue, value, secure,isInvalid }) {
    return (
        <View style={styles.inputContainer}>
            <Text style={[styles.label, isInvalid && styles.labelInvalid ]}>{label}</Text>
            <TextInput 
            style={[styles.input, isInvalid && styles.inputInvalid]}
            autoCapitalize='none' 
            keyboardType={keyboardType} 
            onChangeText={onUpdateValue} 
            value={value} 
            secureTextEntry={secure} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 10,
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
        color: 'white'
    },
    labelInvalid: {
        color: 'red'
    },
    input: {
       backgroundColor :'white',
       paddingVertical: 8,
       paddingHorizontal: 10,
        borderRadius: 20,
        fontSize:16,
        color: 'black'
    },
    inputInvalid: {
        color: 'red',
        borderWidth: 1,
    }
})