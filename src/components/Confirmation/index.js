import React from 'react';
import { View, Text, Pressable } from 'react-native';

import styles from './styles';

const Confirmation = () => {

    const confirm = () => {
        console.warn('Confirmed')
    }

    return (
        <View>
        <Pressable onPress={confirm} style={styles.press}>
                <Text style={styles.text}>
                      Confirm
                </Text>
        </Pressable>
        </View>
    )
}

export default Confirmation;