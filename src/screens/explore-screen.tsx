/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect } from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { StatusBar } from 'expo-status-bar'
import { TouchableOpacity, View } from 'react-native'
import * as homeStackStyles from '@styles/home-stack-screen.style'
import { type StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types'
import Background from '@components/background.component'
import MapView, { Marker, type Region } from 'react-native-maps'
import { getUserLocation } from '@/lib/location'
import Ionicons from 'react-native-vector-icons/Ionicons'
// import MapViewDirections from 'react-native-maps-directions'
// import { GOOGLE_API_KEY } from '@/lib/constants'
// import dotenv from 'dotenv'
// dotenv.config()

interface HomeStackParamList {
  ExploreScreen: undefined
  CreateRouteScreen: undefined
  SavedScreen: undefined
  MyProfileScreen: undefined
};

interface ExploreScreenProps {
  navigation: WelcomeScreenNavigationProp
}

export type WelcomeScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'ExploreScreen'>

export default function ExploreScreen ({ navigation }: ExploreScreenProps): JSX.Element {
  const [origin, setOrigin] = React.useState({ latitude: 100, longitude: 100 })
  const [delta, setDelta] = React.useState({ latitude: 0.002, longitude: 0.002 })
  const [isRefocusing, setIsRefocusing] = React.useState(false)
  const [isButtonVisible, setIsButtonVisible] = React.useState(true)
  const mapRef = React.useRef<MapView>(null)

  useEffect(() => {
    setIsRefocusing(false)
    setIsButtonVisible(true)
  }, [])

  useEffect(() => {
    const setLocation = async (): Promise<void> => {
      const location = await getUserLocation()
      if (location != null) {
        setOrigin(location)
      }
    }
    const intervalId = setInterval(setLocation, 5000)

    // Clear the interval when the component unmounts
    return () => { clearInterval(intervalId) }
  }, [origin])

  const goToUserRegion = (): void => {
    if (mapRef.current != null) {
      setIsButtonVisible(false)
      setIsRefocusing(true)
      mapRef.current.animateToRegion({
        latitude: origin.latitude,
        longitude: origin.longitude,
        latitudeDelta: delta.latitude,
        longitudeDelta: delta.longitude
      }, 1000) // Duration (in milliseconds) to animate to the region
      setTimeout(() => {
        setIsRefocusing(false)
      }, 1100)
    }
  }

  const handleRegionChange = (region: Region): void => {
    // console.log('Region changed, isRefocusing: ', isRefocusing)
    if (isRefocusing) return
    if (region.latitude !== origin.latitude || region.longitude !== origin.longitude) {
      setIsButtonVisible(true)
    }
  }

  return (
    <Background
      gradient={homeStackStyles.backgroundGradient}
    >
      <StatusBar style='light' />
      <View style={{ ...homeStackStyles.styles.screenWrapper, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: '95%', height: '95%', borderRadius: 15, overflow: 'hidden' }}>
          <MapView
            ref={mapRef}
            style={{ width: '100%', height: '100%' }}
            region={{
              latitude: origin.latitude,
              longitude: origin.longitude,
              latitudeDelta: delta.latitude,
              longitudeDelta: delta.longitude
            }}
            onRegionChange={handleRegionChange}
          >
            <Marker
              coordinate={origin}
              title='You are here'
              description='Your current location'
            />
            {/* <MapViewDirections
              origin={origin}
              destination={origin}
              waypoints={[{ latitude: origin.latitude + 0.005, longitude: origin.longitude + 0.005 }]}
              apikey={GOOGLE_API_KEY}
              strokeWidth={5}
              strokeColor='green'
              mode='WALKING'
              onReady={result => {
                mapRef.current?.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: 20,
                    left: 20,
                    top: 20,
                    bottom: 20
                  }
                })
              }}
            /> */}
          </MapView>
          { (isButtonVisible && !isRefocusing) &&
            <TouchableOpacity style={{ position: 'absolute', bottom: 10, right: 10, backgroundColor: 'darkgray', padding: 10, borderRadius: 10 }} onPress={goToUserRegion} >
              <Ionicons name={'locate'} size={25} color={'#f0f0f0'} />
            </TouchableOpacity>}
        </View>
      </View>
    </Background>
  )
}
