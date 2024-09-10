import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const NextBtn = ({next, navigation, text}) => {
  return (
    <View>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate({name: next})}  
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
      borderRadius: 50,
      width: 310,
      height: 58,
      backgroundColor: '#A3D0CB',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 80
    },
    text: {
      color: '#fff',
      fontSize: 25,
      fontWeight: '400'
    }
})

export default NextBtn