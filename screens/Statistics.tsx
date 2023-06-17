import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import ExpenseInInterval from '../components/statistics/ExpenseInInterval';
import { IExpenditureCategory, IExpenditureStats, Interval, IStoreState, TExpenseCategory } from '../types';
import IntervalButton from '../components/statistics/IntervalButton';
import CustomView from '../components/common/CustomView';
import CategoryWiseExpense from '../components/statistics/CategoryWiseExpense';

const intervals = [Interval.WEEK, Interval.MONTH, Interval.YEAR];

const Statistics = () => {
    const expenses = useSelector((state: IStoreState) => state.app.expenditures);
    const [stats, setStats] = React.useState<IExpenditureStats>({
        amount: 0,
        prevIntervalExpenditurePercentage: 0,
        isExpenditureThisIntervalLessThanPrev: true,
        interval: Interval.WEEK,
        category: [],
    });

    const handleIntervalChange = React.useCallback(
        (interval: Interval) => {
            setStats(prev => ({ ...prev, interval }));
        },
        [],
    );

    React.useEffect(() => {
        const totalExpenditurePerCategoryInInterval = new Map();
        const totalExpenditurePerCategory = new Map();
        const expenseCategories: IExpenditureCategory[] = [];

        let timeDifference = 7; // week
        if (stats.interval === Interval.MONTH) {
            timeDifference = 30;
        }
        if (stats.interval === Interval.YEAR) {
            timeDifference = 365;
        }

        expenses.forEach(e => {
            const differenceInDays = Math.floor((Date.now() - new Date(e.date).getTime()) / (1000 * 3600 * 24));
            if (differenceInDays <= timeDifference) {
                totalExpenditurePerCategoryInInterval.set(
                    e.category,
                    (totalExpenditurePerCategoryInInterval.get(e.category) || 0) + e.amount,
                );
                totalExpenditurePerCategory.set(
                    e.category,
                    (totalExpenditurePerCategory.get(e.category) || 0) + e.amount,
                );
            }
            console.log(totalExpenditureInInterval);
        });

        for (let i = 0; i < totalExpenditurePerCategory.size; i++) {
            const category = totalExpenditurePerCategory.keys().next().value as TExpenseCategory;
            const categoryItem: IExpenditureCategory = {
                name: category,
                entries: totalExpenditurePerCategory.size,
                totalExpenditure: totalExpenditurePerCategory.get(category),
                expenditureInInterval: totalExpenditurePerCategoryInInterval.get(category),
            };
            expenseCategories.push(categoryItem);
        }
        expenseCategories.sort((a, b) => b.totalExpenditure - a.totalExpenditure);
        const totalExpenditureInInterval = Array.from(totalExpenditurePerCategoryInInterval.values()).reduce(
            (a, b) => a + b,
            0,
        );
        const totalExpenditure = Array.from(totalExpenditurePerCategory.values()).reduce((a, b) => a + b, 0);
        const prevIntervalExpenditurePercentage = Math.round(
            ((totalExpenditure - totalExpenditureInInterval) / totalExpenditureInInterval) * 100,
        );
        const isExpenditureThisIntervalLessThanPrev = totalExpenditureInInterval < totalExpenditure;
        setStats(prev => ({
            ...prev,
            amount: totalExpenditureInInterval,
            prevIntervalExpenditurePercentage,
            isExpenditureThisIntervalLessThanPrev,
            category: expenseCategories,
        }));
    }, [expenses, stats.interval]);

    return (
        <View className={'pt-14 px-5 bg-white h-full'}>
            <ExpenseInInterval
                amount={stats.amount}
                interval={stats.interval}
                prevIntervalExpenditurePercentage={stats.prevIntervalExpenditurePercentage}
                isExpenditureThisIntervalLessThanPrev={stats.isExpenditureThisIntervalLessThanPrev}
            />
            <CustomView className={'flex flex-row gap-x-2 my-5'}>
                {intervals.map((interval, index) => (
                    <IntervalButton
                        key={index}
                        onClick={handleIntervalChange}
                        interval={interval}
                        active={stats.interval.toString() === interval.toString()}
                    />
                ))}
            </CustomView>
            <CategoryWiseExpense categories={stats.category} />
        </View>
    );
};

export default Statistics;
