import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screens from '../utils/screenName';
import restaurantsScreen from '../screens/restaurants/RestaurantScreen'
import addRestaurantScreen from '../screens/restaurants/addRestaurantsScreen'

const Stack = createNativeStackNavigator();

export default function MyStack() {
    return (


        <Stack.Navigator>

            <Stack.Screen
                name={screens.restaurants.restaurants}
                component={restaurantsScreen}
                options={{
                    //title: screens.restaurants.restaurants,
                    //text: "Este es el screen de restaurantes"
                }}
            />

            <Stack.Screen
                name={screens.restaurants.add_restaurant}
                component={addRestaurantScreen}
                options={{

                }}
            />

        </Stack.Navigator>


    );
}