import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screens from '../utils/screenName';
import { View, Text } from 'react-native';
import accountScreen from '../screens/account/AccountScreen'
import addAccountScreen from '../screens/account/addAccountScreen'


const Stack = createNativeStackNavigator();

export default function MyStack() {
    return (


        <Stack.Navigator>

            <Stack.Screen
                name={screens.account.account}
                component={accountScreen}
                options={{

                }}
            />

            <Stack.Screen
                name={screens.account.add_account}
                component={addAccountScreen}
                options={{

                }}
            />

        </Stack.Navigator>


    );
}