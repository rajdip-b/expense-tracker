import React from 'react';
import { Interval } from '../../types';
import { Text } from 'react-native';
import CustomPressable from '../common/CustomPressable';

type Props = {
    onClick: (interval: Interval) => void;
    interval: Interval;
    active: boolean;
};

const IntervalButton: React.FC<Props> = ({ onClick, interval, active }) => {
    return (
        <CustomPressable
            onPress={() => onClick(interval)}
            className={`px-4 py-2 rounded-lg ${active ? 'border border-darkGray text-darkGray' : 'text-lightGray'}`}
        >
            <Text>{interval.toString()}</Text>
        </CustomPressable>
    );
};

export default IntervalButton;
