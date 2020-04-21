import React, { useEffect, useState, memo } from 'react'
import { StyleSheet, View, Text, Alert } from 'react-native'
import * as Location from 'expo-location'

import Loading from './Loading'

const App = () => {
  const [location, setLocation] = useState({})
  const [errorMsg, setErrorMsg] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const getLocation = async () => {
    try {
      let { status } = await Location.requestPermissionsAsync()

      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
      }

      let { coords } = await Location.getCurrentPositionAsync({})
      
      setLocation({
        latitude: coords.latitude, 
        longitude: coords.longitude
      })

      setTimeout(() => {
        setIsLoading(false)
      }, 2000);
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
          <Loading />
          :
          <View>
            <Text>{location.latitude}</Text>
            <Text>{location.longitude}</Text>
          </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: '#fdf6aa'
  }
})

export default App