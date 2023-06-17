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
            className='py-1 border-b-[0.5px] border-b-gray-300'
        >
            <View className='flex flex-row justify-between'>
                <Text className='text-lg'>{expense.note}</Text>
                <Text className='text-lg'>₹ {expense.amount}</Text>
            </View>
            <View className={'flex flex-row justify-between'}>
                <Text className='text-textGrey'>{expense.category}</Text>
                <Text className='text-textGrey'>
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
