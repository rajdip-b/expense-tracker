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
        <View
            className='py-[30px] flex justify-center items-center bg-gradient-to-br from-darkBlue via-darkPurple to-lightBrown'>
            <Text className='text-lg text-gray-500 m-3 font-medium' style={{
                fontFamily: 'Poppins-Medium',
            }}>Spent this week</Text>
            <View className='flex flex-row items-start'>
                <Text className='text-gray-600' style={{
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: 30,
                    paddingTop: 13,
                }}>₹</Text>
                <Text className='text-sky-700'
                      style={{
                          fontFamily: 'Poppins-SemiBold',
                          fontSize: 60,
                      }}>{rupee.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text>
                <Text className='text-sky-700' style={{
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: 35,
                    paddingTop: 10,
                }}>.{paise}</Text>
            </View>
        </View>
    );
};

export default TotalExpenseView;
