/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type Geometry } from '@/types/geo-json'
import { OPEN_ROUTE_SERVICE_KEY } from '../lib/constants'
import axios from 'axios'
import { type LatLng } from 'react-native-maps'

const URL = 'https://api.openrouteservice.org/v2/directions/foot-walking/geojson'

const headers = {
  Authorization: OPEN_ROUTE_SERVICE_KEY
}

export interface RoundTripParams {
  distance: number
  points?: number
  seed?: number
}

export const getRoundTrip = async (
  { latitude, longitude }: LatLng,
  { distance: length, points, seed }: RoundTripParams
): Promise<LatLng[]> => {
  const body = {
    coordinates: [[longitude, latitude]],
    alternative_routes: { target_count: 3 },
    elevation: 'true',
    language: 'es-es',
    options: {
      round_trip: {
        length: length ?? 6000,
        points: points ?? 4,
        seed: seed ?? Math.floor(Math.random() * 100000000)
      }
    }
  }

  try {
    const response = await axios.post(URL, body, { headers })
    const coordinates = (response.data.features[0].geometry as Geometry).coordinates
    return coordinates.map(c => ({ latitude: c[1], longitude: c[0] }))
  } catch (error) {
    console.error(JSON.stringify(error))
    throw new Error()
  }
}
