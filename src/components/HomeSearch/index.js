import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native'

import AntDesign from 'react-native-vector-icons/AntDesign'

import styles from './styles';

const HomeSearch = () => {

    const navigation = useNavigation();

const goToSearch = () => {
    navigation.navigate('DestinationSearch')
}

    return (
        <View>
            <Pressable onPress={goToSearch} style={styles.inputBox}>
                <Text style={styles.inputText}>Catch a Taxi</Text>

                <View style={styles.arrow}>
                    <AntDesign name={'arrowright'} size={16} />
                </View>
            </Pressable>

        </View>
    );
};
export default HomeSearch;