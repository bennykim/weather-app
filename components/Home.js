import React from 'react'
import { StyleSheet, View, Button, Alert } from 'react-native'

import ActionButton from 'react-native-circular-action-menu'
import { Ionicons } from '@expo/vector-icons'

const Home = ({ data }) => {

  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        title="press me"
        onPress={() => Alert.alert(data.textData)}
      />

      <ActionButton buttonColor="#2c3e50">
        <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
          <Ionicons name="logo-instagram" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => { }}>
          <Ionicons name="logo-facebook" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => { }}>
          <Ionicons name="logo-youtube" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    color: 'black',
    fontSize: 26
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
})

export default Home

