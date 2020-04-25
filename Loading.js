import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Loading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading..</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fdf6aa'
  },
  text: {
    fontSize: 30
  }
})

export default Loading