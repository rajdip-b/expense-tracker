import React from 'react';
import { Text, View } from 'react-native';

const ExpenseCard = () => {
    return (
        <View className='py-1 border-b-[0.5px]'>
            <View className="flex flex-row justify-between">
                <Text className="text-xl">Petss</Text>
                <Text className="text-xl">₹ 1000.00</Text>
            </View>
            <Text className='text-textGrey text-base'>Treat</Text>
        </View>
    );
};

export default ExpenseCard;
