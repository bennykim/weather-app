import React from 'react'
import { StyleSheet, View, Text, StatusBar, Button } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import PropTypes from 'prop-types'
import { LinearGradient } from 'expo-linear-gradient'

import weatherOptions from '../data/weatherOptions'

const Weather = ({ navigation, temp, condition, description }) => {
  const temperature = Math.round(temp)

  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle='light-content'/>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons 
          name={weatherOptions[condition].iconName} 
          size={96} 
          color='white'
        />
        <Text style={styles.temp}>
          {temperature}
        </Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer}}>
        <Text style={styles.title}>
          {weatherOptions[condition].title}
        </Text>
        <Text style={styles.subtitle}>
          {description}
        </Text>
      </View>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </LinearGradient>
  )
}

Weather.prototype = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    'Thunderstorm',
    'Drizzle',
    'Rain',
    'Snow',
    'Atmosphere',
    'Clear',
    'Clouds',
    'Mist',
    'Smoke',
    'Haze',
    'Dust',
    'Fog',
    'Sand',
    'Dust',
    'Ash',
    'Squall',
    'Tornado',
  ]).isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    fontSize: 26,
    color: 'white'
  },
  title: {
    color: 'white',
    fontSize: 44,
    fontWeight: '300',
    marginBottom: 10
  },
  subtitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: 'flex-start'
  }
})

export default Weather
