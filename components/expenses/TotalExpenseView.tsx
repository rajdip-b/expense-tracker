import React from 'react';
import { Text, View } from 'react-native';

interface TotalExpenseViewProps {
    value: number;
}

const TotalExpenseView = ({ value }: TotalExpenseViewProps) => {
    const splitValueToParts = (value: number) => {
        const parts = value.toString().split('.');

        return {
            rupee: parts[0],
            paise: parts[1] + '0',
        };
    };

    const { rupee, paise } = splitValueToParts(value);

    return (
        <View className="pt-[150px] pb-[85px]  flex justify-center items-center ">
            <Text className="text-lg text-textGrey m-3 font-medium">Spent this week</Text>
            <View className="flex flex-row">
                <Text className="text-4xl text-textGrey">₹</Text>
                <Text className="text-7xl text-black ">{rupee.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
                <Text className="text-4xl text-black ">.{paise}</Text>
            </View>
        </View>
    );
};

export default TotalExpenseView;
