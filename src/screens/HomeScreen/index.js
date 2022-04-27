import React from 'react';
import {Text, View} from 'react-native'

import HomeMap from '../../components/HomeMap';
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = () => {
    return(
        <View>
            <HomeMap />
            <HomeSearch />
        </View>
    )
}

export default HomeScreen;