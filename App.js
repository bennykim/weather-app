import React from 'react'
import { StyleSheet, View } from 'react-native'

import WeatherViews from './views/WeatherViews'

const App = () => {
  return (
    <View style={styles.container}>
      <WeatherViews />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App
