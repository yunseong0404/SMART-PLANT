import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {launchImageLibrary} from 'react-native-image-picker';
import camera from '../../assets/images/camera.png';

const GetPhoto = ({showPicker}) => {
  return (
    <View style={{marginTop: 50}}>
      <Text style={box.text}>식물의 사진을 업로드 해주세요</Text>
      <View style={box.border}>
        <TouchableOpacity onPress={showPicker}>
          <Image
              source={camera}
              style={box.icon}
            />
        </TouchableOpacity>
      </View>
  </View>
  )
}

const box = StyleSheet.create({
  border: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#D9D9D9',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1.2,
    height: 150,
    width: 310,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    color: '#333333',
  },
  icon: {
    width: 40,
    height: 40,
    margin: '50 50'
  }
});

export default GetPhoto