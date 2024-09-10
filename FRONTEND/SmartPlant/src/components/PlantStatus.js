import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const PlantStatus = ({icon, nowCondition, rightCondition, styleStatus, status}) => {

  return (
    <View 
        style={[styles.container, 
                styleStatus,
                status ? divColor.blueContainer : divColor.redContainer
                ]}
    >
        <View style={{flexDirection: 'row'}}>
            <Image
                source={icon}
                style={styles.icon}
            />
            <Text style={styles.nowCondition}>{nowCondition}</Text>
        </View>
        <View style={{width: 87}}>
            <Text style={styles.rightCondition}>{rightCondition}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        borderRadius: 15,
        borderWidth: 0.7,
        borderStyle: 'solid',
        padding: 12
    },
    icon: {
        width: 40,
        height: 40,
        marginRight: 8
    },
    nowCondition: {
        fontSize: 25,
        color: '#111',
        fontWeight: '400'
    },
    rightCondition: {
        color: '#33363F', 
    }
});

const divColor = StyleSheet.create({
    redContainer: {
        borderColor: '#FAB4B4',
        backgroundColor: '#FFF5F5'
    },
    blueContainer: {
        borderColor: '#6486FF',
        backgroundColor: '#F8FBFF'
    }
});

export default PlantStatus