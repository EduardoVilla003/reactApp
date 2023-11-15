import { View, Text, Button } from 'react-native'
import React from 'react'
import screens from '../../utils/screenName';

export default function RestaurantScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Esta es la Screen de Restaunt!</Text>
            <Button
                title='Agregar restaurantes'
                onPress={() => { navigation.navigate(screens.restaurants.add_restaurant) }}
            />
        </View>
    );
}
