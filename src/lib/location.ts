import * as Location from 'expo-location'

export async function getUserLocation(): Promise<
  { latitude: number; longitude: number } | undefined
> {
  const { status } = await Location.requestForegroundPermissionsAsync()
  if (status !== 'granted') {
    alert('Permission to access location was denied')
    return
  }

  const location = await Location.getCurrentPositionAsync({})
  const current = {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude
  }

  return current
}
