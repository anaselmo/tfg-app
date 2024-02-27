import { View, Text } from 'react-native'
import React from 'react'
import * as TabIcons from '@components/tab-bar-icons.component'

const CreateRouteScreen = (): JSX.Element => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Create Route Screen</Text>

      <TabIcons.CreateRouteIcon.focused />
      <TabIcons.CreateRouteIcon.unfocused />

      <TabIcons.ExploreIcon.focused />
      <TabIcons.ExploreIcon.unfocused />

      <TabIcons.SavedIcon.focused />
      <TabIcons.SavedIcon.unfocused />

      <TabIcons.MyProfileIcon.focused />
      <TabIcons.MyProfileIcon.unfocused />

    </View>
  )
}

export default CreateRouteScreen
