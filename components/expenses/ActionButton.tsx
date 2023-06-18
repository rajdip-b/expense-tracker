import React from 'react';
import { Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IRootStackParamList } from '../../types';

const ActionButton: React.FC<{ navigation: NativeStackNavigationProp<IRootStackParamList> }> = ({ navigation }) => {
    const handleOnPress = React.useCallback(() => navigation.navigate('AddExpense'), [navigation]);

    return (
        <Pressable
            onPress={handleOnPress}
            className={
                'flex items-center justify-center rounded-full bg-green-500 w-[50px] h-[50px] absolute bottom-0 mx-auto'
            }
        >
            <Ionicons name='md-add' size={25} color='white' />
        </Pressable>
    );
};

export default ActionButton;
