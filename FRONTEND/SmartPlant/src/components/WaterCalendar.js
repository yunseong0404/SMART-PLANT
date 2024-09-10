import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Calendar } from 'react-native-calendars'
import waterdrop from '../../assets/images/waterdrop.png'

const WaterCalendar = ({styleCalendar}) => {

  const [waterDay, setWaterDay] = useState([]);

  //데이터를 받아온다 -> 데이터가 변경 -> useEffect로 급수 일자 추가
  //급수 날짜 데이터를 받아서 addWater 호출
  useEffect(() => {
    //데이터 가져오기
    //가져온 데이터를 추가
    addWater('2024-04-08');
    addWater('2024-04-10');
  },[]);

  //급수 일자 추가
  const addWater = (date) => {
    const newDay = date;
    const updatedWaterDay = [...waterDay, date];
    setWaterDay(updatedWaterDay);
  };

  //마커 이미지 지정 컴포넌트
  const MarkerBgImg = ({date}) => {
    for(const day of waterDay){
      if(date.dateString === day) {
        return(
          <View>
            <ImageBackground 
              source={waterdrop} 
              style={{width:18, height:22, opacity: 0.7}}
            >
              <Text>{date.day}</Text>
            </ImageBackground>
          </View>
        );
      } else {
        return (
          <View>
            <Text>{date.day}</Text>
          </View>
        )
      }
    }
  }

  return (
    <View style={[styles.container, styleCalendar.calendarMargin]}>
      <View style={styles.titleContain}>
        <Image
          source={waterdrop}
          style={styles.waterIcon}
        />
        <Text style={styles.title}>급수 캘린더</Text>
      </View>

      <Calendar
        style={styles.calendar}
        // markingType={'custom'}
        // markedDates={waterDay}
        dayComponent={({date}) => (
          <MarkerBgImg date={date}/>
        ) }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '80%',
  },
  waterIcon: {
    width: 23,
    height: 23,
    marginRight: 4,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#111'
  },
  titleContain: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  calendar: {   
    borderRadius: 20
  },

});

export default WaterCalendar