
import { View } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Onboarding from './src/components/screens/onboarding/onboarding'
import Login from './src/components/screens/login/Login'

export default function App() {
  const [isLoading, setisLoading] = useState(false)

  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        {isLoading ? (
          <Stack.Screen name="Loading" component={View} />
        ) : (
          <>
            <Stack.Screen name="Onboarding" component={Onboarding}  />
            <Stack.Screen name="Login" component={Login} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}