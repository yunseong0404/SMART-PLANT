import { View, Text, StyleSheet, Button, Image } from 'react-native'
import React, { useState } from 'react'
import NextBtn from '../../components/NextBtn'
import ImageForm from '../../components/ImageForm'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {PermissionsAndroid} from 'react-native';
import {Alert} from 'react-native';


const CreatePhoto = ({navigation}) => {
   
  const showPicker = async ()=>{
    const grantedcameral = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    {
      title: "App Camera Permission",
      message: "App needs access to your camera",
      buttonNeutral: "Ask Me Later",
      buttonNegative: "Cancel",
      buttonPositive: "OK"
    }
  );
  const grantedstorage = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    {
      title: "App Camera Permission",
      message: "App needs access to your camera",
      buttonNeutral: "Ask Me Later",
      buttonNegative: "Cancel",
      buttonPositive: "OK",
    }
  );

  if (grantedcameral === PermissionsAndroid.RESULTS.GRANTED && grantedstorage === PermissionsAndroid.RESULTS.GRANTED) {
    console.log("Camera & storage permission given");

  }
  else{
    console.log("Camera permission denied")

    Alert.alert(
      "사진 업로드",
      "식물의 사진을 등록 해 주세요!",
      [
        {
          text: "카메라",
          onPress: async() =>{
            const result = await launchCamera({
              mediaType : 'photo', 
              cameraType : 'back', 
            });
              if (result.didCancel){ 
                return null;
              }
              const localUri = result.assets[0].uri;
              const uriPath = localUri.split("//").pop();
              const imageName = localUri.split("/").pop();
              setPhoto("file://"+uriPath);
          }
        },
        {
          text: "앨범",
          onPress: async() =>{
            const result = await launchImageLibrary();
            if (result.didCancel){
              return null;
            } 
            const localUri = result.assets[0].uri;
            const uriPath = localUri.split("//").pop();
            const imageName = localUri.split("/").pop();
            setPhoto("file://"+uriPath);
          }
        },
      ],
      {cancelable: false}
    );

  }
  };

  

  return (
    <View style={[sort.midle, styles.container]}>
        <ImageForm
          showPicker={showPicker}
        />

        <NextBtn 
          next='CreatePhoto' 
          navigation={navigation}
          text='Create'
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



export default CreatePhoto