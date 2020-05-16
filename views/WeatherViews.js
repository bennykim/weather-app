import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Alert, Text } from 'react-native'
import * as Location from 'expo-location'
import axios from 'axios'

import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import { API_KEY, BASE_URL } from '../data/api'
import Loading from '../components/Loading'
import Weather from '../components/Weather'
import Home from '../components/Home'

const Tab = createBottomTabNavigator()

const WeatherViews = (textData) => {
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
    } catch (err) {
      console.log(err);
      
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
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ badgeCount, focused, color, size }) => {
                  let iconName

                  if (route.name === 'Home') {
                    iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline'
                  } else if (route.name === 'Weather') {
                    iconName = focused ? 'ios-list-box' : 'ios-list'
                    badgeCount = 1
                  }

                  return <View style={{ width: 24, height: 24, margin: 5 }}>
                    <Ionicons name={iconName} size={size} color={color} />
                    {badgeCount > 0 && (
                      <View
                        style={{
                          // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
                          position: 'absolute',
                          right: -6,
                          top: -3,
                          backgroundColor: '#2c3e50',
                          borderRadius: 6,
                          width: 12,
                          height: 12,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                          {badgeCount}
                        </Text>
                      </View>
                    )}
                  </View>
                },
              })}
              tabBarOptions={{
                activeTintColor: '#2c3e50',
                inactiveTintColor: 'gray',
              }}
            >
              <Tab.Screen name="Home">
                {() => <Home data={textData}/>}
              </Tab.Screen>
              <Tab.Screen name="Weather">
                {() => <Weather
                  temp={temp}
                  condition={condition}
                  description={description}
                />}
              </Tab.Screen>
            </Tab.Navigator>
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

export default WeatherViews
