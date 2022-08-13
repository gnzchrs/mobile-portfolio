import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'

import Main from './screens/Main'
import About from './screens/About'

export default function App() {
  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height

  return (
    <ScrollView
      style={[styles.container, { width: windowWidth, height: windowHeight }]}
    >
      <StatusBar style="auto" backgroundColor="white" />

      <Main />
      <About />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
})
