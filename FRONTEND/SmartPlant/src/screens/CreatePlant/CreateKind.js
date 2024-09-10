import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Input from '../../components/Input'
import NextBtn from '../../components/NextBtn'

const CreateKind = ({navigation}) => {

  return (
    <View style={[sort.midle, styles.container]}>
        <Input title="식물의 종류가 무엇인가요?"/>
        <NextBtn 
          next="CreateDate"
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

export default CreateKind