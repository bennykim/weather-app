import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button
        title="Go to Weather"
        onPress={() => navigation.navigate('Weather')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'black',
    fontSize: 26
  }
})

export default Home

