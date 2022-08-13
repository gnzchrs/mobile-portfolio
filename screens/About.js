import React from 'react'
import { View, StyleSheet, Text, Dimensions } from 'react-native'

const About = () => {
  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height
  return (
    <View
      style={[styles.container, { width: windowWidth, height: windowHeight }]}
    >
      <Text>sdfasdfa</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 10,
  },
})
export default About
