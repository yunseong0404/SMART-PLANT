import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import thermometer from '../../assets/images/thermometer.png'
import humidity from '../../assets/images/humidity.png'
import sun from '../../assets/images/sun.png'
import soil from '../../assets/images/soil.png'
import PlantStatus from './PlantStatus'

const StatusBoard = () => {
  return (
    <View>
      
      <PlantStatus
        styleStatus={styleStatus.statusContainer}
        icon={thermometer}
        nowCondition="15°C"  
        rightCondition="적정온도 12°C"
        status={true}
      />

      <PlantStatus
        styleStatus={styleStatus.statusContainer}
        icon={humidity}
        nowCondition="70%" 
        rightCondition="적정습도 80%"
        status={true}
      />

      <PlantStatus
        styleStatus={styleStatus.statusContainer}
        icon={sun}
        nowCondition="20 langley" 
        rightCondition="적정일조량  15 langley"
        status={false}
      />

      <PlantStatus
        styleStatus={styleStatus.statusContainer}
        icon={soil}
        nowCondition="pH 12" 
        rightCondition="적정pH 15"
        status={false}
      />
    </View>
  )
}

const styleStatus = StyleSheet.create({
    statusContainer : {
      marginBottom: 5,
      marginTop: 5
    }
  });

  
export default StatusBoard