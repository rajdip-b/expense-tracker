import React from 'react';
import { TExpenseCategory } from '../../types';
import { Alert, Pressable, Text } from 'react-native';

type Props = {
    onPress: (category: TExpenseCategory) => void;
    onRemoveCategory: (category: TExpenseCategory) => void;
    category: TExpenseCategory;
    style?: any;
    className?: string;
    isSelected: boolean;
};

const CategoryItem: React.FC<Props> = props => {
    const handleDeleteCategory = React.useCallback(() => {
        Alert.alert(
            'Delete category',
            `Are you sure you want to delete ${props.category}? This would delete all expenses under this category.`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    onPress: () => props.onRemoveCategory(props.category),
                    style: 'default',
                },
            ],
            {
                cancelable: true,
            },
        );
    }, []);

    return (
        <Pressable
            onLongPress={handleDeleteCategory}
            onPress={() => props.onPress(props.category)}
            style={props.style}
            className={`${props.className} px-3 py-1 rounded-xl border ${
                props.isSelected ? 'border-emerald-500' : 'border-darkGray'
            } transition-all ease-out duration-300`}
        >
            <Text
                className={`${
                    props.isSelected ? 'text-emerald-500' : 'text-darkGray'
                } transition-all ease-out duration-300 text-sm`}
            >
                {props.category}
            </Text>
        </Pressable>
    );
};

export default CategoryItem;
