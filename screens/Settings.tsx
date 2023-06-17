import React from 'react';
import { Text, View } from 'react-native';
import Button from '../components/settings/Button';

const buttons = [
    {
        iconName: 'reload',
        text: 'Reset',
        onPress: () => {},
    },
    {
        iconName: 'github',
        text: 'Github',
        onPress: () => {},
    },
];

const Settings = () => {
    return (
        <View className={'pt-14 px-5 bg-white h-full'}>
            <Text className={'text-3xl font-bold'}>Settings</Text>
            <View className={'w-full h-full flex flex-col items-center justify-center'}>
                {buttons.map((button, index) => (
                    <Button key={index} iconName={button.iconName} text={button.text} onPress={button.onPress} />
                ))}
            </View>
        </View>
    );
};

export default Settings;
