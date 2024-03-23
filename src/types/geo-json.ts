export interface Root {
  type: string
  metadata: Metadata
  bbox: number[]
  features: Feature[]
}

export interface Metadata {
  attribution: string
  service: string
  timestamp: number
  query: Query
  engine: Engine
}

export interface Query {
  coordinates: number[][]
  profile: string
  format: string
  language: string
  elevation: boolean
  options: Options
  alternative_routes: AlternativeRoutes
}

export interface Options {
  round_trip: RoundTrip
}

export interface RoundTrip {
  length: number
  points: number
  seed: number
}

export interface AlternativeRoutes {
  target_count: number
}

export interface Engine {
  version: string
  build_date: string
  graph_date: string
}

export interface Feature {
  bbox: number[]
  type: string
  properties: Properties
  geometry: Geometry
}

export interface Properties {
  ascent: number
  descent: number
  transfers: number
  fare: number
  segments: Segment[]
  way_points: number[]
  summary: Summary
}

export interface Segment {
  distance: number
  duration: number
  steps: Step[]
  ascent: number
  descent: number
}

export interface Step {
  distance: number
  duration: number
  type: number
  instruction: string
  name: string
  way_points: number[]
}

export interface Summary {
  distance: number
  duration: number
}

export interface Geometry {
  coordinates: number[][]
  type: string
}
