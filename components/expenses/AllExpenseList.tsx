import React from 'react';
import { SafeAreaView, SectionList, Text } from 'react-native';
import ExpenseCard from './components-AllExpenseList/ExpenseCard';
import Header from './components-AllExpenseList/Header';
import { useSelector } from 'react-redux';
import { IExpenditure, IExpenseDisplay, IStoreState } from '../../types';

const AllExpenseList = () => {
    const expenses = useSelector((state: IStoreState) => state.app.expenditures);

    const [expensesDisplay, setExpensesDisplay] = React.useState<IExpenseDisplay[]>([]);

    React.useEffect(() => {
        setExpensesDisplay([]);
        const dateToday = new Date();
        const expensesToday = [] as IExpenditure[];
        const expensesYesterday = [] as IExpenditure[];
        const expensesRest = [] as IExpenditure[];
        expenses.forEach(expense => {
            const date = new Date(expense.date);
            const difference = (dateToday.getTime() - date.getTime()) / (1000 * 3600 * 24);
            if (difference > 7) expensesRest.push(expense);
            else if (difference > 1) expensesYesterday.push(expense);
            else expensesToday.push(expense);
        });
        expensesToday.length !== 0 &&
            setExpensesDisplay(prev => [
                ...prev,
                {
                    title: {
                        date: 'Today',
                        spent: expensesToday.reduce((acc, curr) => acc + +curr.amount, 0),
                    },
                    data: expensesToday,
                },
            ]);
        expensesYesterday.length !== 0 &&
            setExpensesDisplay(prev => [
                ...prev,
                {
                    title: {
                        date: 'Yesterday',
                        spent: expensesYesterday.reduce((acc, curr) => acc + +curr.amount, 0),
                    },
                    data: expensesYesterday,
                },
            ]);
        expensesRest.length !== 0 &&
            setExpensesDisplay(prev => [
                ...prev,
                {
                    title: {
                        date: 'Earlier',
                        spent: expensesRest.reduce((acc, curr) => acc + +curr.amount, 0),
                    },
                    data: expensesRest,
                },
            ]);
    }, [expenses]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {expensesDisplay.length !== 0 ? (
                <SectionList
                    sections={expensesDisplay}
                    renderItem={({ item }) => <ExpenseCard expense={item} />}
                    renderSectionHeader={({ section }) => <Header data={section.title} />}
                    keyExtractor={item => `basicListEntry-${item.id}`}
                />
            ) : (
                <Text className="text-center text-gray-500 text-xl mt-10">No expenses yet</Text>
            )}
        </SafeAreaView>
    );
};

export default AllExpenseList;
