import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screens from '../utils/screenName';
import searchScreen from '../screens/search/SearchScreen';
import addSearchScreen from '../screens/search/addSearchScreen';

const Stack = createNativeStackNavigator();

export default function MyStack() {
    return (


        <Stack.Navigator>

            <Stack.Screen
                name={screens.search.search}
                component={searchScreen}
                options={{

                }}
            />

            <Stack.Screen
                name={screens.search.add_search}
                component={addSearchScreen}
                options={{

                }}
            />

        </Stack.Navigator>


    );
}