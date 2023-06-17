import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { IStoreState } from '../../types';

const TotalExpenseView = () => {
    const splitValueToParts = (value: number) => {
        const parts = value.toString().split('.');
        if (parts.length == 1)
            return {
                rupee: parts[0],
                paise: '00',
            };
        else
            return {
                rupee: parts[0],
                paise: parseInt(parts[1]) < 10 ? parts[1] + '0' : parts[1],
            };
    };

    const { rupee, paise } = splitValueToParts(
        useSelector((state: IStoreState) =>
            state.app.expenditures
                .filter(e => (new Date().getTime() - new Date(e.date).getTime()) / (1000 * 3600 * 24) < 7)
                .reduce((acc, curr) => acc + +curr.amount, 0),
        ),
    );

    return (
        <View className="py-[80px] flex justify-center items-center ">
            <Text className="text-lg text-textGrey m-3 font-medium">Spent this week</Text>
            <View className="flex flex-row">
                <Text className="text-4xl text-textGrey">₹</Text>
                <Text className="text-7xl text-black ">{rupee.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text>
                <Text className="text-4xl text-black ">.{paise}</Text>
            </View>
        </View>
    );
};

export default TotalExpenseView;
