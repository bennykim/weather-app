import React from 'react'
import { StyleSheet, View, Text, Alert } from 'react-native'
import PropTypes from 'prop-types'

const Weather = ({temp}) => {
  const temperature = Math.round(temp)

  return (
    <View style={styles.container}>
      <Text>{temperature}</Text>
    </View>
  )
}

Weather.prototype = {
  temp: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
})

export default Weather