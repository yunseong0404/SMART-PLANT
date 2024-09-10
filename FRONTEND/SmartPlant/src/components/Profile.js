import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import profileImg from '../../assets/images/profileImg.png'

const profile = ({styleProfile}) => {
  return (
    <View style={styleProfile.marginB}>
        <Image 
            source={profileImg}
            style={styles.profileImg}
        />
        <View style={{marginTop: 20}}>
            <Text style={styles.nameText}>식물이</Text>
            <Text style={styles.dayText}>D+ 23</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    profileImg: {
        borderRadius: 150,
        width: 180,
        height: 180
    },
    nameText: {
        fontSize: 24,
        color: '#111',
        textAlign: 'center'
    },
    dayText: {
        fontSize: 24,
        color: '#5B5858',
        textAlign: 'center'
    }
})

export default profile