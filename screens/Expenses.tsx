import React from 'react';
import { View } from 'react-native';
import { ActionButton, AllExpenseList, TotalExpenseView } from '../components/expenses';

const Expenses = () => {
    return (
        <View className="bg-white h-[100%] ">
            <ActionButton />
            <TotalExpenseView value={2010.4} />
            <AllExpenseList />
        </View>
    );
};

export default Expenses;
