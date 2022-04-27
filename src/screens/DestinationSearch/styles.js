import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        padding: 10,
        // backgroundColor: '#eee',
        height: '100%',
    },

    textInput: {
        padding: 10,
        backgroundColor: 'grey',
        marginVertical: 5,
        //marginLeft: 20, ... if you want to put icons on the left to for the pickup and destination inputs
    },

    separator: {
        backgroundColor: 'grey',
        height: 1,
    },

    listView: {
        position: 'absolute',
        top: 105
    },

    autocompleteContainer: {
        position: 'absolute',
        top: 0,
        left: 10,
        right: 10,
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },

    iconContainer: {
        backgroundColor: '#a2a2a2',
        padding: 5,
        borderRadius: 50,
        marginRight: 15,
    },

    locationText: {

    },

    // below is dummy styles for icons to be displayed on the left of inputText for pickup and dropoff

    // circle: {
    //     width: 5,
    //     height: 5,
    //     backgroundColor: 'black',
    //     position: 'absolute',
    //     top: 20,
    //     left: 15,
    //     borderRadius: 5,
    // },

    // line: {
    //     width: 1,
    //     height: 50,
    //     backgroundColor: 'black',
    //     position: 'absolute',
    //     top: 28,
    //     left: 17,
    // },

    // square: {
    //     width: 5,
    //     height: 5,
    //     backgroundColor: 'black',
    //     position: 'absolute',
    //     top: 80,
    //     left: 15,
    // },
});

export default styles;