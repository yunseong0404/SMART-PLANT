import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Calendar } from 'react-native-calendars'

const DateCalendar = () => {

    const [markedDay, setmarkedDay] = useState({});

    //날짜 선택
    const selectedDay = (day) => {
        const update = {[day.dateString]: {selected: true}};
        setmarkedDay(update);
    }

  return (
    <View style={{marginTop:50}}>
      <Text style={styles.text}>식물을 키우기 시작한 날짜를 선택해 주세요</Text>
      <Calendar
        style={styles.calendar}
        markedDates={markedDay}
        onDayPress={(day) => selectedDay(day)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    calendar: {   
        borderRadius: 20,
        width: 310
    },
    text: {
        fontSize: 20,
        marginBottom: 10,
        color: '#333333',
        width: 310
    }
});

export default DateCalendar