import React from 'react';
import { Text, View } from 'react-native';

interface HeaderProps {
    data: {
        date: string;
        spent: number;
    };
}

const Header = ({ data }: HeaderProps) => {
    return (
        <View className='flex flex-row justify-between border-b-[0.5px] border-textGrey px-1 mt-6 mb-3'>
            <Text className='text-lg text-gray-500' style={{ fontFamily: 'Poppins-Light' }}>{data.date}</Text>
            <Text className='text-lg text-amber-800' style={{ fontFamily: 'Poppins-Medium' }}>
                ₹ {data.spent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </Text>
        </View>
    );
};

export default Header;
