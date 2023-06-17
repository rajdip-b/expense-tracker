import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text } from 'react-native';
import CustomPressable from '../common/CustomPressable';

type Props = {
    iconName: string;
    text: string;
    onPress: () => void;
};

const Button: React.FC<Props> = props => {
    return (
        <CustomPressable
            className={'p-5 rounded-xl border border-lightGray flex flex-row items-center w-[75%] justify-center my-3'}
        >
            <Ionicons name={props.iconName} size={50} color={'#ccc'} />
            <Text className={'ml-5 text-lg text-darkGray'}>{props.text}</Text>
        </CustomPressable>
    );
};

export default Button;
