import React, { useEffect, useState, memo } from 'react'
import { StyleSheet, View, Text, Alert } from 'react-native'
import * as Location from 'expo-location'
import axios from 'axios'

import Loading from './Loading'
import Weather from './Weather'

const API_KEY = '02fb21c1688c5d858a86f41661b4d111'
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather'

const App = () => {
  const [temp, setTemp] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const getLocation = async () => {
    try {
      const { status } = await Location.requestPermissionsAsync()

      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
      }

      const { coords } = await Location.getCurrentPositionAsync({})
      const { data } = await axios.get(`${BASE_URL}/?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&units=metric`)

      setTemp(data.main.temp)
      setIsLoading(false)
    } catch(err) {
      Alert.alert("Can't find you ...")
    }
  }

  useEffect(() => {
    getLocation()
  }, [])

  return (
    <View style={styles.container}>
      {
        isLoading ? 
          <Loading/>
          :
          <Weather temp={temp}/>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App