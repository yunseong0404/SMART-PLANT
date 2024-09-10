import { View, Text, Image, TouchableOpacity, Button, StyleSheet, StatusBar } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import plant_logo from '../../assets/images/plant_logo.png';

const Start = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true}/>
      <Image
        source={plant_logo}
        style={styles.logoImg}
      />

      <TouchableOpacity  
        style={styles.button}
        onPress={() => navigation.navigate('Main')}
      >
        <Text style={styles.buttonText}>Let's start!</Text>
      </TouchableOpacity >

      <TouchableOpacity
        onPress={() => navigation.navigate({name: 'CreateTabScreen'})} 
      >
        <Text style={styles.linkText}>create new</Text> 
      </TouchableOpacity>  

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E1F2EC", 
    alignItems: 'center', 
    width: '100%', 
    height: '100%'
  },
  logoImg: {
    width: 215, 
    height: 320, 
    marginTop: 150,
    // margin: 100
  },
  button: {
    width: '80%',
    height: 70,
    borderRadius: 20,
    marginTop: 200,
    backgroundColor: '#A3D0CB',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,  
  },
  buttonText : {
    color: '#fff',
    fontSize: 30, 
    fontWeight: 'bold',
    fontFamily: 'LilitaOne-Regular',
  },
  linkText: {
    marginTop: 20,
    fontSize: 23,
    textDecorationLine: 'underline'
  }
})

export default Start
