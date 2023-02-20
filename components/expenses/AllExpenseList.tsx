import React from 'react';
import { SectionList, Text, View } from 'react-native';
import ExpenseCard from './components-AllExpenseList/ExpenseCard';
import Header from './components-AllExpenseList/Header';

const AllExpenseList = () => {
    return (
        <View className="px-[30px]">
            <SectionList
                sections={[
                    {
                        title: { date: 'Today', spent: '76.45' },
                        data: [
                            {   
                                id: 1,
                                head: 'Pets',
                                amount: '1000.00',
                                description: 'Treat',
                            },
                            {
                                id: 2,
                                head: 'art',
                                amount: '1000.00',
                                description: 'Treat',
                            }
                        ],
                    },
                    {
                        title: { date: 'Yesterday', spent: '1000.00' },
                        data: [
                            {
                                id: 1,
                                head: 'Card',
                                amount: '1003.00',
                                description: 'Treat',
                            },
                            {   
                                id: 2,
                                head: 'asdf',
                                amount: '1000.00',
                                description: 'Treat',
                            }
                        ],
                    },
                ]}
                renderItem={({ item }) => <ExpenseCard />}
                renderSectionHeader={({ section }) => <Header data={section.title} />}
                keyExtractor={item => `basicListEntry-${item.id}`}
            />
        </View>
    );
};

export default AllExpenseList;
