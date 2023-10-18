import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screens from '../utils/screenName';
import { View, Text } from 'react-native';
import rankingScreen from '../screens/ranking/RankingScreen'
import addRankingScreen from '../screens/ranking/addRankingScreen'

const Stack = createNativeStackNavigator();

export default function MyStack() {
    return (


        <Stack.Navigator>

            <Stack.Screen
                name={screens.ranking.ranking}
                component={rankingScreen}
                options={{
                    //text: "Este es el screen de restaurantes"
                }}
            />

            <Stack.Screen
                name={screens.ranking.add_ranking}
                component={addRankingScreen}
                options={{

                }}
            />

        </Stack.Navigator>


    );
}