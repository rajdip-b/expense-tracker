import React from 'react';
import CustomView from '../common/CustomView';
import { Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomPressable from '../common/CustomPressable';

const Header = () => {
    return (
        <CustomView className={'flex flex-row w-full px-5 items-center gap-x-3'}>
            <CustomView className={'w-[60px] h-[60px] rounded-full bg-teal flex items-center justify-center'}>
                <Text className={'text-xl text-gray-800'} style={{ fontFamily: 'Poppins-SemiBold' }}>J</Text>
            </CustomView>
            <CustomView className={'flex flex-grow flex-col'}>
                <Text style={{ fontFamily: 'Poppins-Medium' }} className={'text-teal'}>Welcome!</Text>
                <Text style={{ fontFamily: 'Poppins-SemiBold' }} className={'text-gray-700 text-lg'}>John
                    Doe</Text>
            </CustomView>
            <CustomPressable className={'rounded-xl bg-lightGray p-2'}>
                <Ionicons name='settings' size={24} color='#9cadbf' />
            </CustomPressable>
        </CustomView>
    );
};

export default Header;