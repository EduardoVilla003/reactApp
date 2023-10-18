import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

export default function addSearchScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Agregar un nueva busqueda:</Text>
            <TextInput
                style={{
                    margin: 10,
                    padding: 10,
                    height: 40,
                    width: 300,
                    borderColor: 'black',
                    borderWidth: 2
                }}
                placeholder="Nueva Busqueda"
            />
            <Button
                title='Agregar Busqueda'
            />
        </View>
    );
}