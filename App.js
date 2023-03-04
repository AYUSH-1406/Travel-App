import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './screens/home'
import ScreenWrapper from './components/common/screen-wrapper'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './navigation/app-navigator'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
  <ScreenWrapper>
    <AppNavigator/>
  </ScreenWrapper>
  </NavigationContainer>
  </Provider>
  )
}

export default App;

const styles = StyleSheet.create({})