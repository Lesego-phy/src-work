import React from 'react';
import { View, Image, Text} from 'react-native';

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import cars from '../../assets/data/cars'
import styles from './styles'

const HomeMap = () => {

    // All these cars to show different taxi type
    const getImage = (type) => {
        if (type === 'WA1163') {
            return require('../../assets/images/WA1163.jpg')
        }
        if (type === 'WA1163') {
            return require('../../assets/images/WA1163.jpg')
        }
        if (type === 'WA1163') {
            return require('../../assets/images/WA1163.jpg')
        }
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
             {cars.map((car) => (
                 <Marker
                 key={car.id}
                     coordinate={{ latitude: car.latitude, longitude: car.longitude }}
                 >
                    
                     <Image style={styles.image, 
                                   transform[{
                                       // first make sure the cars are facing up in the images folder
                                       rotate: `${car.heading}deg`
                                   }]
                     // or you can add all styles in line for the image just so the transform object can fit well
                     }
                      source={getImage(car.type)} />

                 </Marker>
             ))}

            </MapView>
        </View>
    )
}

export default HomeMap;