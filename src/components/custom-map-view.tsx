/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { type ComponentProps, useEffect } from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TouchableOpacity, View } from 'react-native'
import MapView, { type LatLng, Marker, Polyline, type Region } from 'react-native-maps'
import { getUserLocation } from '@/lib/location'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { getRoundTrip } from '@/api/route-service'
// import MapViewDirections from 'react-native-maps-directions'
// import { GOOGLE_API_KEY } from '@/lib/constants'
// import dotenv from 'dotenv'
// dotenv.config()

interface CustomMapViewProps extends ComponentProps<typeof View> {
  roundTripParams?: { distance: number; points?: number; seed?: number }
}

export default function CustomMapView(props: CustomMapViewProps): JSX.Element {
  const [origin, setOrigin] = React.useState<LatLng>()
  const [delta, setDelta] = React.useState<LatLng>({ latitude: 0.002, longitude: 0.002 })
  const [isRefocusing, setIsRefocusing] = React.useState(false)
  const [isButtonVisible, setIsButtonVisible] = React.useState(true)
  const mapRef = React.useRef<MapView>(null)
  const [routeCoordinates, setRouteCoordinates] = React.useState<LatLng[]>()

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
    return () => {
      clearInterval(intervalId)
    }
  }, [origin])

  const goToUserRegion = (): void => {
    if (origin == null) return
    if (mapRef.current != null) {
      setIsButtonVisible(false)
      setIsRefocusing(true)
      mapRef.current.animateToRegion(
        {
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: delta.latitude,
          longitudeDelta: delta.longitude
        },
        1000
      ) // Duration (in milliseconds) to animate to the region
      setTimeout(() => {
        setIsRefocusing(false)
      }, 1100)
    }
  }

  const handleRegionChange = (region: Region): void => {
    if (origin == null) return
    if (isRefocusing) return
    if (region.latitude !== origin.latitude || region.longitude !== origin.longitude) {
      setIsButtonVisible(true)
    }
  }

  useEffect(() => {
    if (origin == null) return
    getRoundTrip(
      origin,
      props.roundTripParams?.distance,
      props.roundTripParams?.points,
      props.roundTripParams?.seed
    ).then(response => {
      setRouteCoordinates(response)
    })
  }, [props.roundTripParams])

  useEffect(() => {
    mapRef.current?.fitToCoordinates(routeCoordinates)
  }, [routeCoordinates])

  // useEffectAsync(async () => {
  //   setRouteCoordinates(await getRoundTrip(origin, 6000, 4))
  // }, [])

  return (
    <View {...props}>
      <MapView
        ref={mapRef}
        style={{ width: '100%', height: '100%' }}
        region={
          origin != null
            ? {
                latitude: origin.latitude,
                longitude: origin.longitude,
                latitudeDelta: delta.latitude,
                longitudeDelta: delta.longitude
              }
            : undefined
        }
        onRegionChange={handleRegionChange}
      >
        {origin != null && (
          <Marker
            coordinate={origin}
            title="You are here"
            description="Your current location"
          />
        )}
        {routeCoordinates != null && (
          <Polyline coordinates={routeCoordinates} strokeColor="green" strokeWidth={5} />
        )}
      </MapView>
      {isButtonVisible && !isRefocusing && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            backgroundColor: 'darkgray',
            padding: 10,
            borderRadius: 10
          }}
          onPress={goToUserRegion}
        >
          <Ionicons name={'locate'} size={25} color={'#f0f0f0'} />
        </TouchableOpacity>
      )}
      {routeCoordinates != null && routeCoordinates.length > 0 && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 65,
            right: 10,
            backgroundColor: 'darkgray',
            padding: 10,
            borderRadius: 10
          }}
          onPress={() => {
            mapRef.current?.fitToCoordinates(routeCoordinates)
          }}
        >
          <Ionicons name={'analytics'} size={25} color={'#f0f0f0'} />
        </TouchableOpacity>
      )}
    </View>
  )
}
