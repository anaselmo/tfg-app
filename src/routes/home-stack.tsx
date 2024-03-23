import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ExploreScreen from '@screens/explore-screen'
import CreateRouteScreen from '@screens/create-route-screen'
import SavedScreen from '@screens/saved-screen'
import MyProfileScreen from '@screens/my-profile-screen'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

const exploreName = 'Explore'
const createRouteName = 'Create Route'
const savedName = 'Saved'
const myProfileName = 'My Profile'

export default function HomeStack(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="ExploreScreen"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            if (route.name === exploreName) {
              iconName = focused ? 'map' : 'map-outline'
            } else if (route.name === createRouteName) {
              iconName = focused ? 'add-circle' : 'add-circle-outline'
            } else if (route.name === savedName) {
              iconName = focused ? 'bookmarks' : 'bookmarks-outline'
            } else {
              iconName = focused ? 'person-circle' : 'person-circle-outline'
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarStyle: {
            backgroundColor: '#172918',
            height: 60,
            paddingTop: 7
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
            fontSize: 12,
            paddingBottom: 7,
            paddingTop: 0,
            fontFamily: 'Inter-Regular'
          },
          tabBarHideOnKeyboard: true
        })}
      >
        <Tab.Screen
          name={exploreName}
          component={ExploreScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={createRouteName}
          component={CreateRouteScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={savedName}
          component={SavedScreen}
          options={{ headerShown: false, tabBarBadge: undefined }}
        />
        <Tab.Screen
          name={myProfileName}
          component={MyProfileScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
