import React from 'react';
import { View } from 'react-native';
import { ActionButton, AllExpenseList, TotalExpenseView } from '../components/expenses';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IRootStackParamList } from '../types';

const Expenses: React.FC<{ navigation: NativeStackNavigationProp<IRootStackParamList> }> = ({ navigation }) => {
    return (
        <View className="bg-white h-[100%] px-5">
            <ActionButton navigation={navigation} />
            <TotalExpenseView />
            <AllExpenseList />
        </View>
    );
};

export default Expenses;
