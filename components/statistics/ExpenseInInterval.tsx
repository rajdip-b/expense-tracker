import React from 'react';
import { Text, View } from 'react-native';
import { Interval } from '../../types';
import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
    amount: number;
    interval: Interval;
    prevIntervalExpenditurePercentage: number;
    isExpenditureThisIntervalLessThanPrev: boolean;
};

const ExpenseInInterval: React.FC<Props> = props => {
    return (
        <View>
            <Text className={'text-4xl font-bold'}>₹ {Number(props.amount).toFixed(2)}</Text>
            <View className={'flex flex-row items-center gap-x-2'}>
                <Text className={'text'}>Total spent previous {props.interval.toString().toLowerCase()}</Text>
                <View className={'flex-row items-center gap-x-1'}>
                    {props.isExpenditureThisIntervalLessThanPrev ? (
                        <>
                            <View className={'rounded-full bg-green-500/20'}>
                                <Ionicons name={'arrow-down'} size={20} color={'green'} />
                            </View>
                            <Text className={'text-sm text-green-500'}>
                                {props.prevIntervalExpenditurePercentage}% less
                            </Text>
                        </>
                    ) : (
                        <>
                            <View className={'rounded-full bg-red-500/20'}>
                                <Ionicons name={'arrow-up'} size={20} color={'red'} />
                            </View>
                            <Text className={'text-sm text-red-500'}>
                                {props.prevIntervalExpenditurePercentage}% more
                            </Text>
                        </>
                    )}
                </View>
            </View>
        </View>
    );
};

export default ExpenseInInterval;
