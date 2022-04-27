import React from 'react';
import {View, Text, Dimensions} from 'react-native';

//we use this hook to receive data from the textInputs to show direction
import {useRoute} from '@react-navigation/native'

import Confirmation from '../../components/Confirmation';
import RouteMap from '../../components/RouteMap';

const SearchResults = () => {
    const route = useRoute();
    //console.log(route.params)
    const {originPlace, destinationPlace} = route.params
    return (
        <View>

            <View style={{height: Dimensions.get('window').height - 50}}>
                <RouteMap origin={originPlace} destination={destinationPlace}/>
            </View>

            <View style={{ height: 50 }}>
                <Confirmation />
            </View>

        </View>
    )
}

export default SearchResults;