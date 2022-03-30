import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <SafeAreaView style={styles.containerStyle}>
      <Text>App</Text>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  containerStyle:{
    flex:1,
    backgroundColor : "white"
  }
})