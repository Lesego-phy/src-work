import React from 'react';
import {View, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'

import styles from './styles';

const PlaceRow = ( data ) => {
     // console.log(data)  // ... to see which data is provided to render in the locationText
    return (
        <View style={styles.row}>
            <View style={styles.iconContainer}>
            
               {data.description === 'Home'
                ? <Entypo name='home' size={20} color='white' />
                :<Entypo name='location-pin' size={20} color='white' /> 
            }
            </View>

            {/* // autocomplete shows description and currentLocation show vicinity for pickup spot (we use or ||) */}

            <Text style={styles.locationText}>{data.description || data.vicinity}</Text>
        </View>
    )
};

export default PlaceRow;