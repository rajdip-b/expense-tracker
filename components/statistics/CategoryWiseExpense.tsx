import React from 'react';
import { IExpenditureCategory } from '../../types';
import { FlatList, ScrollView } from 'react-native';
import CategoryItem from './CategoryItem';

type Props = {
    categories: IExpenditureCategory[]
}

const CategoryWiseExpense: React.FC<Props> = ({ categories }) => {
    console.log(categories);

    return (
        <ScrollView>
            <FlatList
                data={categories}
                renderItem={({ item }) => <CategoryItem category={item} />}
            />
        </ScrollView>
    );
};

export default CategoryWiseExpense;