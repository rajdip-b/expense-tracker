import React from 'react';
import { Alert, Text, ToastAndroid, View } from 'react-native';
import { IExpenditure } from '../../../types';
import { useDispatch } from 'react-redux';
import { appActions } from '../../../store/app-slice';
import moment from 'moment';
import CustomPressable from '../../common/CustomPressable';

type Props = {
    expense: IExpenditure;
};

const isInWeek = (date: string) => {
    const difference = (new Date().getTime() - new Date(date).getTime()) / (1000 * 3600 * 24);
    return difference < 7;
};

const isToday = (date: string) => {
    const difference = (new Date().getTime() - new Date(date).getTime()) / (1000 * 3600 * 24);
    return difference < 1;
};

const ExpenseCard: React.FC<Props> = ({ expense }) => {
    const dispatch = useDispatch();

    const handleOnPress = React.useCallback(
        () => ToastAndroid.show(expense.note ? expense.note : 'No note provided!', ToastAndroid.SHORT),
        [],
    );

    const handleOnLongPress = React.useCallback(() => {
        Alert.alert(
            'Delete expense',
            'Are you sure you want to delete this expense?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    onPress: () => dispatch(appActions.removeExpenditure(expense.id)),
                },
            ],
            { cancelable: true },
        );
    }, []);

    return (
        <CustomPressable
            onPress={handleOnPress}
            onLongPress={handleOnLongPress}
            className='bg-gray-100 rounded-2xl py-2 px-4 mb-3'
        >
            <View className='flex flex-row justify-between'>
                <Text className='text-lg text-slate-700'
                      style={{ fontFamily: 'Poppins-SemiBold' }}>{expense.note}</Text>
                <Text className='text-lg text-rose-400'
                      style={{ fontFamily: 'Poppins-SemiBold' }}>₹ {expense.amount}</Text>
            </View>
            <View className={'flex flex-row justify-between'}>
                <Text className='text-textGrey' style={{ fontFamily: 'Poppins-Medium' }}>{expense.category}</Text>
                <Text className='text-textGrey' style={{ fontFamily: 'Poppins-Medium' }}>
                    {isInWeek(expense.date)
                        ? isToday(expense.date)
                            ? moment(expense.date).format('hh:mm A')
                            : moment(expense.date).format('dddd Do, hh:mm A')
                        : moment(expense.date).format('MMMM do')}
                </Text>
            </View>
        </CustomPressable>
    );
};

export default ExpenseCard;
