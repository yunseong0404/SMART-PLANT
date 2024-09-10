import { View, Text, Image, StyleSheet, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Profile from '../components/Profile'
import WaterCalendar from '../components/WaterCalendar'
import StatusBoard from '../components/StatusBoard'


const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        hidden={false}
        barStyle='dark-content' 
        backgroundColor='#E1F2EC'
      />

      <Profile 
        styleProfile={styleProfile}
      />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={{alignItems: 'center'}}
      >

        <StatusBoard/>

        <WaterCalendar
          styleCalendar={styleCalendar}
        /> 
      </ScrollView>
      

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
  },
  container: {
    backgroundColor: "#E1F2EC", 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '100%', 
    height: '100%',
  },
  statusContainer : {
    marginBottom: 12,
  }
});

const styleProfile = StyleSheet.create({
  marginB: {
    marginBottom: 50,
    marginTop: 60
  }
});

const styleCalendar = StyleSheet.create({
  calendarMargin: {
    marginTop: 30,
    marginBottom: 40,
  }
});

export default Main