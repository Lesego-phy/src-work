import React from 'react';
import { View, Image, Text} from 'react-native';

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import styles from './styles'

// just so it can invoked at the bottom apikey requirement
// const GOOGLE_MAPS_APIKEY = ''
const RouteMap = ({ origin, destination}) => {

    // receives data provided from inputText for direction as destructured from the props
    const originLoc = {
        latitude: origin.details.geometry.location.lat,
        longitude:  origin.details.geometry.location.lng,
    }; 

    const destinationLoc = {
        latitude: destination.details.geometry.location.lat,
        longitude: destination.details.geometry.location.lng,
    };

    return (
        <View style={styles.container}>
            <MapView
                style={{width: '100%', height: '100%'}}
                provider={PROVIDER_GOOGLE}
                showUserLocation={true}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    // you can decrease the delta to have a close view of a place
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <MapViewDirections
                    origin={originLoc}
                    destination={destinationLoc}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={5}
                    strokeColor="black"
                />
                <Marker
                    coordinate={origin}
                    title={'Origin'}
                    //description={marker.description}
                />
                <Marker
                    coordinate={destination}
                    title={'Destination'}
                    //description={marker.description}
                />

            </MapView>
        </View>
    )
}

export default RouteMap;