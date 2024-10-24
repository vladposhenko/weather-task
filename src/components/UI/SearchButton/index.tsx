import React, { FC, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../../styles/theme';

interface ISearchButtonProp {
    onPress: (value: GestureResponderEvent) => Promise<void>
}

const SearchButton: FC<ISearchButtonProp> = ({ onPress }) => {
    useEffect(() => {
        
    }, [])
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Ionicons name="search" size={30} color={'#fff'} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 10,
        marginVertical: 10,
        flexBasis: '20%',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#007bff',
        paddingHorizontal: 15,
        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        // Elevation for Android
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        marginLeft: 10,
        fontSize: theme.fontSizes.normal,
    },
});

export default SearchButton;
