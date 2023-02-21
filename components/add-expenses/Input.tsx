import React from 'react';
import CustomView from '../common/CustomView';
import { Pressable, Text, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';

type Props = {
    style?: any;
    className?: string;
    placeholder?: string;
    value: string;
    onChange: (value: string, name: string) => void;
    name: 'amount' | 'note' | 'date' | 'category';
    type: 'text' | 'number' | 'date' | 'search' | 'note';
    title: string;
};

const Input: React.FC<Props> = props => {
    const [showDatePicker, setShowDatePicker] = React.useState(false);

    const displayDatePicker = React.useCallback(() => {
        setShowDatePicker(true);
    }, []);

    const hideDatePicker = React.useCallback(() => {
        setShowDatePicker(false);
    }, []);

    const handleDatePickerEvent = React.useCallback(
        (event: any, selectedDate: Date | undefined) => {
            if (selectedDate) {
                props.onChange(selectedDate.toString(), 'date');
            }
            hideDatePicker();
        },
        [props.onChange],
    );

    return (
        <CustomView style={props.style} className={'w-full'}>
            <Text className={'text-gray-500'}>{props.title}</Text>
            <CustomView className={`${props.className} bg-gray-100 rounded-xl flex flex-row p-3`}>
                {props.name === 'amount' && <Text className={'text-lg text-black'}>₹</Text>}
                <TextInput
                    multiline={props.type === 'note'}
                    numberOfLines={props.type === 'note' ? 5 : 1}
                    autoCapitalize={'words'}
                    autoCorrect={true}
                    style={{ textAlignVertical: 'top' }}
                    autoFocus={props.name === 'amount'}
                    value={props.value}
                    editable={props.type !== 'date'}
                    placeholder={props.placeholder}
                    onChangeText={text => props.onChange(text, props.name)}
                    className={`text-lg text-black flex-grow mx-3`}
                    keyboardType={props.type === 'number' ? 'numeric' : 'default'}
                />
                {props.type === 'date' && (
                    <Pressable onPress={displayDatePicker}>
                        <Ionicons name={'calendar'} size={24} color={'#57565E'} />
                    </Pressable>
                )}
                {props.type === 'search' && <Ionicons name={'search'} size={24} color={'#57565E'} />}
            </CustomView>
            {showDatePicker && <DateTimePicker value={new Date()} is24Hour onChange={handleDatePickerEvent} />}
        </CustomView>
    );
};

export default Input;
