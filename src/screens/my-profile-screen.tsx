import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { MyProfileIcon } from '@components/tab-bar-icons.component'

const MyProfileScreen = (): JSX.Element => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar style='light' />
      <Text>My Profile Screen</Text>
      <MyProfileIcon.focused />
      <MyProfileIcon.unfocused />
    </View>
  )
}

export default MyProfileScreen
