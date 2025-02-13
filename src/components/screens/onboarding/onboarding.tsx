import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import styles from '../../styles/onboardingstyles'
import StaticText from '../../constants/StaticData'
import { useNavigation } from '@react-navigation/native'

export default function Onboarding() {
  const navigation = useNavigation();
  return (
    <LinearGradient colors={['#E5ECF9', '#F6F7F9']} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.firstContainer}>
        <Image
          source={require('../../../assests/images/logo.png')}
          style={styles.logo}
        />
        <View style={styles.secondContainer}>
          <Text style={styles.textStyle1}>{StaticText.start_text}</Text>
          <Text style={styles.textStyle2}>{StaticText.explore_text}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={styles.button_wrapper}>
        <Text style={styles.button_text}>Get Started</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}