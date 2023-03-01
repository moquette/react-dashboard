// @ts-ignore

import { Loader } from '@googlemaps/js-api-loader'

type google = typeof google

export interface MapConfig {
  apiKey: string
  config: (google: google) => google.maps.MapOptions
}

const initializeMap = async (mapRef: HTMLDivElement, mapConfig: MapConfig) => {
  await new Loader({
    apiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY,
  }).load()

  const { google } = window
  const map = new google.maps.Map(mapRef, mapConfig.config(google))

  return {
    map,
    google,
  }
}

export { initializeMap }
