import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Loading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting the App Weather</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 30
  }
})

export default Loading