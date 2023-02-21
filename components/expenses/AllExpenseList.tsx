import React from 'react';
import { SafeAreaView, SectionList } from 'react-native';
import ExpenseCard from './components-AllExpenseList/ExpenseCard';
import Header from './components-AllExpenseList/Header';
import { useSelector } from 'react-redux';
import { IStoreState } from '../../types';

const AllExpenseList = () => {
    const expenses = useSelector((state: IStoreState) => state.app.expenditures);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <SectionList
                bounces={true}
                stickySectionHeadersEnabled={true}
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
                            },
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
                            },
                            {
                                id: 3,
                                head: 'asdf',
                                amount: '1000.00',
                                description: 'Treat',
                            },
                            {
                                id: 4,
                                head: 'asdf',
                                amount: '1000.00',
                                description: 'Treat',
                            },
                            {
                                id: 5,
                                head: 'asdf',
                                amount: '1000.00',
                                description: 'Treat',
                            },
                        ],
                    },
                ]}
                renderItem={({ item }) => <ExpenseCard />}
                renderSectionHeader={({ section }) => <Header data={section.title} />}
                keyExtractor={item => `basicListEntry-${item.id}`}
            />
        </SafeAreaView>
    );
};

export default AllExpenseList;
