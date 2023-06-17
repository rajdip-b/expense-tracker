import React from 'react';
import { IExpenditureCategory } from '../../types';
import CustomPressable from '../common/CustomPressable';
import CustomView from '../common/CustomView';
import { Text } from 'react-native';

type Props = {
    category: IExpenditureCategory;
}

const CategoryItem: React.FC<Props> = ({ category }) => {
    return (
        <CustomPressable className={'flex flex-row justify-between w-full'}>
            <CustomView className={'flex flex-col gap-y-1'}>
                <Text>{category.name}</Text>
                <Text>{category.entries} entries</Text>
            </CustomView>
            <CustomView>
                <Text>₹ {Number(category.expenditureInInterval).toFixed(2)}</Text>
                <Text>₹ {Number(category.totalExpenditure).toFixed(2)}</Text>
            </CustomView>
        </CustomPressable>
    );
};

export default CategoryItem;