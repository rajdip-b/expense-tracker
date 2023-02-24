import React from 'react';
import { Alert, Pressable, Text, ToastAndroid, View } from 'react-native';
import { IExpenditure } from '../../../types';
import { useDispatch } from 'react-redux';
import { appActions } from '../../../store/app-slice';

type Props = {
    expense: IExpenditure;
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
        <Pressable
            onPress={handleOnPress}
            onLongPress={handleOnLongPress}
            className="py-1 border-b-[0.5px] border-b-gray-300"
        >
            <View className="flex flex-row justify-between">
                <Text className="text-xl">{expense.category}</Text>
                <Text className="text-xl">₹ {expense.amount}</Text>
            </View>
            <Text className="text-textGrey text-base">{expense.date}</Text>
        </Pressable>
    );
};

export default ExpenseCard;
