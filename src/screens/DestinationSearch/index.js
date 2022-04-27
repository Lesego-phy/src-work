import React, { useState } from 'react';
import {View, Text, TextInput, SafeAreaView} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {useNavigation} from '@react-navigation/native'

import PlaceRow from './PlaceRow';
import styles from './styles';

const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

const DestinationSearch = () => {

    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    const navigation = useNavigation();

    const doNavigation = () => {
        if (originPlace && destinationPlace) {
            // navigates and sends data to the search results page
            navigation.navigate('SearchResults', {
                originPlace,
                destinationPlace,
            })
        }
    }

    useEffect( () => {
        doNavigation();
    }, [originPlace, destinationPlace])

    return (
        <SafeAreaView>
            <View style={styles.container}>

                <GooglePlacesAutocomplete
                    placeholder='where from'
                    onPress={(data, details = null) => {
                        // 'details' are provided when fetchDetails = true
                        setOriginPlace({ data, details }, doNavigation);
                        //console.log({ data, details });
                    }}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    currentLocation={true}
                    currentLocationLabel='Current location'
                    styles={{
                        textInput: styles.textInput,
                        container: styles.autocompleteContainer,
                        listView: styles.listView,
                        separator: styles.separator
                    }}
                    fetchDetails
                    query={{
                        key: 'API KEY',
                        language: 'en',
                    }}
                    // this receives google places data and send it to PlaceRow file
                    renderRow={(data) => <PlaceRow data={data} />}
                    
                    // this promotes description row of pickup spots to appear on the box after being selected
                    renderDescription={(data) => data.description || data.vicinity}

                    predefinedPlaces={[homePlace, workPlace]}
                />

                <GooglePlacesAutocomplete
                    placeholder='where to'
                onPress={(data, details = null) => {
                    // 'details' are provided when fetchDetails = true
                    setDestinationPlace({ data, details }, doNavigation);
                    //console.log({data, details});
                }}
                enablePoweredByContainer={false}
                suppressDefaultStyles
                styles={{
                    textInput: styles.textInput,
                    container: {
                        ...styles.autocompleteContainer,
                        top: 55,
                        },
                    separator: styles.separator
                }}
                fetchDetails
                query= {{
                    key: 'API KEY',
                    language: 'en',
                }}
                    // this receives google places data and send it to PlaceRow file
                    renderRow={(data) => <PlaceRow data={data} />}
                />

                {/* below should be icons to display for pickup and dropoff on the left of inputText */}

                {/* <View style={styles.circle}/>
                <View style={styles.line} />
                <View style={styles.square} /> */}

            </View>
        </SafeAreaView>
    );
};
export default DestinationSearch;