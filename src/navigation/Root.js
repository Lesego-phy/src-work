import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen/';
import DestinationSearch from '../screens/DestinationSearch';
import SearchResults from '../screens/SearchResults';
import Profile from '../screens/Profile';
import TaxiRank from '../screens/TaxiRank';

const Stack = createNativeStackNavigator();

const fullScreenWidth = Dimensions.get('window').width;

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            >
              <Stack.Screen name={'Home'} component={HomeScreen}/>
                <Stack.Screen name={'DestinationSearch'} component={DestinationSearch} />
                <Stack.Screen name={'SearchResults'} component={SearchResults} />
            </Stack.Navigator>
        </NavigationContainer>

    );
};

    const HomeStackScreen = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        );
    };

    const ProfileStackScreen = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
        );
    };

    const TaxiRankStackScreen = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="TaxiRank" component={TaxiRank} />
            </Stack.Navigator>
        );
    };

    const Tab = createBottomTabNavigator();

    export default function MyTabs(props) {
        return (
            <NavigationContainer>
                <Tab.Navigator
                screenOptions={({route}) => ({
                    headerTitle: () => <Text>Header</Text>,
                    tabBarIcon: ({focused, color, size, padding}) => {
                        let iconName;
                        if (route.name === 'Home'){
                            iconName = focused ? 'home' : 'home-outline';
                        } 
                        else if (route.name === 'Profile'){
                            iconName = focused 
                            ? 'person-circle' 
                            : 'person-circle-outline';
                        } 
                        else if (route.name === 'TaxiRank'){
                            iconName = focused ? 'layers' : 'layers-outline';
                        }
                        return (
                            <Ionicons 
                                name={iconName} 
                                size={size}
                                color={color}
                                style={{paddingBottom: padding}}   
                            />
                        )
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'lightseagreen',
                    inactiveTintColor: 'grey',
                    labelStyle: {fontSize: 16},
                    style: {fullScreenWidth}
                }}
                >
                    <Tab.Screen name="Home" component={HomeStackScreen} />
                    <Tab.Screen name="TaxiRank" component={TaxiRankStackScreen} />
                    <Tab.Screen name="Profile" component={ProfileStackScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }

export default RootNavigator;