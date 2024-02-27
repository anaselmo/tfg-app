import { View, Text } from 'react-native'
import React from 'react'
import { SavedIcon } from '@components/tab-bar-icons.component'

const SavedScreen = (): JSX.Element => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Saved Screen</Text>
      <SavedIcon.focused />
      <SavedIcon.unfocused />
    </View>
  )
}

export default SavedScreen
