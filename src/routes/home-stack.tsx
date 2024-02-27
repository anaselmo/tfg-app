import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ExploreScreen from '@screens/explore-screen'
import CreateRouteScreen from '@screens/create-route-screen'
import SavedScreen from '@screens/saved-screen'
import MyProfileScreen from '@screens/my-profile-screen'
import { NavigationContainer } from '@react-navigation/native'
import {
  CreateRouteIcon,
  ExploreIcon,
  MyProfileIcon,
  SavedIcon
} from '@components/tab-bar-icons.component'

const Tab = createBottomTabNavigator()

const exploreName = 'Explore'
const createRouteName = 'Create Route'
const savedName = 'Saved'
const myProfileName = 'My Profile'

export default function HomeStack (): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='ExploreScreen'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'ExploreScreen') {
              return focused
                ? <ExploreIcon.focused color={color}/>
                : <ExploreIcon.unfocused color={color}/>
            } else if (route.name === 'CreateRouteScreen') {
              return focused
                ? <CreateRouteIcon.focused color={color}/>
                : <CreateRouteIcon.unfocused color={color}/>
            } else if (route.name === 'SavedScreen') {
              return focused
                ? <SavedIcon.focused color={color}/>
                : <SavedIcon.unfocused color={color}/>
            } else if (route.name === 'MyProfileScreen') {
              return focused
                ? <MyProfileIcon.focused color={color}/>
                : <MyProfileIcon.unfocused color={color}/>
            }
          },
          tabBarStyle: {
            backgroundColor: '#172918'
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray'
        })}
      >
        <Tab.Screen name={exploreName} component={ExploreScreen} options = {{ headerShown: false }}/>
        <Tab.Screen name={createRouteName} component={CreateRouteScreen} options = {{ headerShown: false }}/>
        <Tab.Screen name={savedName} component={SavedScreen} options = {{ headerShown: false }}/>
        <Tab.Screen name={myProfileName} component={MyProfileScreen} options = {{ headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
