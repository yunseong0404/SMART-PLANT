import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Input = ({title}) => {

    const [text, onChangeText] = useState('');

  return (
    <View style={{marginTop:50}}>
      <Text style={styles.text}>{title}</Text>
        <TextInput
          style={styles.inputCont}
          onChangeText={onChangeText}
          value={text}
          maxLength={10}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  inputCont: {
    borderColor: '#D9D9D9',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1.2,
    width: 310,
    height: 58,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    color: '#333333',
  }
})

export default Input