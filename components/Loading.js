import React from 'react'
import { StyleSheet, View, Text, StatusBar } from 'react-native'

const Loading = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content'/>
      <Text style={styles.text}>Loading..</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000'
  },
  text: {
    color: 'white',
    fontSize: 30
  }
})

export default Loading
