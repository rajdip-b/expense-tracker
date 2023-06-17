import React from 'react';
import { Pressable } from 'react-native';

type Props = {
    style?: any;
    className?: string;
    children?: React.ReactNode;
    onPress?: () => void;
};

const CustomPressable: React.FC<Props> = props => {
    return (
        <Pressable style={props.style} className={props.className} onPress={props.onPress}>
            {props.children}
        </Pressable>
    );
};

export default CustomPressable;
