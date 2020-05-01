import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Alert, Text } from 'react-native'
import * as Location from 'expo-location'
import axios from 'axios'

import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { API_KEY, BASE_URL } from './data/api'
import Loading from './components/Loading'
import Weather from './components/Weather'
import Home from './components/Home'

const Stack = createStackNavigator();

const App = () => {
  const [temp, setTemp] = useState(null)
  const [condition, setCondition] = useState('')
  const [description, setDescription] = useState('')
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
      setCondition(data.weather[0].main)
      setDescription(data.weather[0].description)

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
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home">
                {props => <Home {...props}/>}
              </Stack.Screen>
              <Stack.Screen name="Weather">
                {props => <Weather
                  navigation={props.navigation}
                  temp={temp}
                  condition={condition}
                  description={description}
                />}
              </Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
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
