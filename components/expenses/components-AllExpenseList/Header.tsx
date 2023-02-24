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
        <View className="flex flex-row justify-between border-b-[0.5px] border-textGrey px-1 mt-10">
            <Text className="text-lg text-textGrey">{data.date}</Text>
            <Text className="text-lg text-textGrey">
                $ {data.spent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </Text>
        </View>
    );
};

export default Header;
