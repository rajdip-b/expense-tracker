import { StatusBar, Text, View } from 'react-native';
import React from 'react';

export default function App() {
    return (
        <View className={'flex justify-center items-center h-full w-full'}>
            <StatusBar />
            <Text className={'text-xl'}>Welcome to my expense tracker!</Text>
        </View>
    );
}
