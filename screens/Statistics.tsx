import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import ExpenseInInterval from '../components/statistics/ExpenseInInterval';
import { IExpenditureStats, Interval, IStoreState } from '../types';
import IntervalButton from '../components/statistics/IntervalButton';
import CustomView from '../components/common/CustomView';

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
        [stats],
    );

    React.useEffect(() => {
        const totalExpenditurePerCategoryInInterval = new Map();
        const totalExpenditurePerCategory = new Map();
        const expenseCategories = [];
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
        });
        for (let i = 0; i < totalExpenditurePerCategory.size; i++) {
            const category = totalExpenditurePerCategory.keys().next().value;
            const categoryItem = {
                name: category,
                entries: totalExpenditurePerCategory.get(category),
                totalExpenditure = totalExpenditurePerCategory.get(e.category),
            }
        }
    }, [expenses]);

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
        </View>
    );
};

export default Statistics;
