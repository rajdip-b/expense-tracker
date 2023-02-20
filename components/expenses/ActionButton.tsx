import React from 'react';
import { Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const ActionButton = () => {
    return (
        <Pressable
            className={
                'flex items-center justify-center rounded-full bg-black w-[30px] h-[30px] absolute fixed-top right-[15px] top-[15px]'
            }
        >
            <Ionicons name="md-add" size={25} color="white" />
        </Pressable>
    );
};

export default ActionButton;
