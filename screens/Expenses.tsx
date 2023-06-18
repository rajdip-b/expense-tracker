import React from 'react';
import { View } from 'react-native';
import { ActionButton, AllExpenseList, TotalExpenseView } from '../components/expenses';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IRootStackParamList } from '../types';
import Header from '../components/expenses/Header';

const Expenses: React.FC<{ navigation: NativeStackNavigationProp<IRootStackParamList> }> = ({ navigation }) => {
    return (
        <View className='bg-teal/25 h-[100%] pt-10'>
            <Header />
            <ActionButton navigation={navigation} />
            <TotalExpenseView />
            <AllExpenseList />
        </View>
    );
};

export default Expenses;
