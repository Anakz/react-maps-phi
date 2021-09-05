import React from 'react'
import GoogleMapReact from 'google-map-react'
import { MapContainer } from './MapElements'


const Map = ({center, zoom}) => {
    return (
        <>
            <MapContainer>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDfxTqDdWgDwR8taa_0lHnsQMp3jIcZIZU'}}
                    defaultCenter={ center }
                    defaultZoom={ zoom }
                >

                </GoogleMapReact>
            </MapContainer>
        </>
    )
}

Map.defaultProps = {
    center : {
        lat: 33.971588,
        lng: -6.849813
    },
    zoom: 10
}

export default Map
