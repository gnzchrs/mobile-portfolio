import React from 'react'
import { View, StyleSheet, Text, Dimensions } from 'react-native'

const Main = () => {
  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height
  return (
    <View
      style={[
        styles.container,
        { width: windowWidth, height: windowHeight + 50 },
      ]}
    >
      <Text>sdfasdasfdfsafasfdaafaddfa</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    paddingTop: '10%',
  },
})
export default Main
