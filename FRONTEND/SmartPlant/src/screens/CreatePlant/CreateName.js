import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Input from '../../components/Input'
import NextBtn from '../../components/NextBtn'

const CreateName = ({navigation}) => {

  return (
    <View style={[sort.midle, styles.container]}>
        <Input title="식물의 별명이 무엇인가요?"/>
        <NextBtn 
          next='CreateKind' 
          navigation={navigation}
          text='Next'  
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E1F2EC", 
    width: '100%', 
    height: '100%',
  },
});

const sort = StyleSheet.create({
  midle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
  }
});

export default CreateName