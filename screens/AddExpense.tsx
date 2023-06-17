import React from 'react';
import { IExpenditure, IExpenditureForm, IRootStackParamList, IStoreState, TExpenseCategory } from '../types';
import CustomView from '../components/common/CustomView';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../components/add-expenses/Input';
import CategoryItem from '../components/add-expenses/CategoryItem';
import CustomPressable from '../components/common/CustomPressable';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, ToastAndroid } from 'react-native';
import { appActions } from '../store/app-slice';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const AddExpense: React.FC<{ navigation: NativeStackNavigationProp<IRootStackParamList> }> = ({ navigation }) => {
    const dispatch = useDispatch();
    const storedExpenseCategories = useSelector((state: IStoreState) => state.app.expenseCategories);

    const [form, setForm] = React.useState<IExpenditureForm>({
        amount: '',
        category: '',
        date: new Date().toISOString(),
        note: '',
    });
    const [category, setCategory] = React.useState('');
    const [categories, setCategories] = React.useState<TExpenseCategory[]>(storedExpenseCategories);
    const [searchCategories, setSearchCategories] = React.useState<TExpenseCategory[]>(storedExpenseCategories);

    const handleCategoryChange = React.useCallback((category: TExpenseCategory) => {
        setCategory(category);
    }, []);

    const handleChange = React.useCallback((value: string | Date, name: string) => {
        setForm(prev => ({ ...prev, [name]: value }));
    }, []);

    const handleAddCategory = React.useCallback(() => {
        dispatch(appActions.addExpenseCategory(category));
        setCategories(prev => [...prev, category]);
        setSearchCategories(prev => [...prev, category]);
        ToastAndroid.show('Category added successfully', ToastAndroid.LONG);
    }, [category]);

    const handleSelectCategory = React.useCallback((category: TExpenseCategory) => {
        handleChange(category, 'category');
    }, []);

    const handleAddExpense = React.useCallback(() => {
        if (form.amount === '') return ToastAndroid.show('Please enter an amount', ToastAndroid.LONG);
        if (form.category === '') return ToastAndroid.show('Please select a category', ToastAndroid.LONG);
        setForm(prev => ({ ...prev, amount: parseFloat(prev.amount).toFixed(2) }));
        const expenditure: IExpenditure = {
            id: Math.random(),
            ...form,
        };
        dispatch(appActions.addExpenditure(expenditure));
        ToastAndroid.show('Expense added successfully', ToastAndroid.LONG);
        navigation.goBack();
    }, [form]);

    const handleRemoveCategory = React.useCallback((category: TExpenseCategory) => {
        dispatch(appActions.removeExpenseCategory(category));
        setCategories(prev => prev.filter(c => c !== category));
        setSearchCategories(prev => prev.filter(c => c !== category));
        ToastAndroid.show('Category deleted successfully', ToastAndroid.LONG);
    }, []);

    React.useEffect(() => {
        setSearchCategories(categories.filter(c => c.toLowerCase().includes(category.trim().toLowerCase())));
    }, [category, categories]);

    return (
        <CustomView className={'bg-white h-full flex flex-col items-center pt-[20px] px-5'}>
            <Input
                className={'mb-3'}
                title={'Enter amount'}
                value={form.amount}
                onChange={handleChange}
                name={'amount'}
                type={'number'}
                placeholder={'20.00'}
            />
            <Input
                className={'mb-3'}
                title={'Where did you spend?'}
                value={form.note}
                onChange={handleChange}
                name={'note'}
                type={'note'}
                placeholder={'Bought a new phone'}
            />
            <Input
                className={'mb-3'}
                title={'Select date'}
                value={form.date}
                onChange={handleChange}
                name={'date'}
                type={'date'}
                placeholder={new Date().toDateString()}
            />
            <Input
                className={'mb-3'}
                title={'Select category'}
                value={category}
                onChange={handleCategoryChange}
                name={'category'}
                type={'search'}
                placeholder={'Travel'}
            />
            <CustomView className={'flex flex-row flex-wrap gap-2'}>
                {searchCategories.map((c, id) => (
                    <CategoryItem
                        isSelected={form.category === c}
                        key={id}
                        category={c}
                        onPress={handleSelectCategory}
                        onRemoveCategory={handleRemoveCategory}
                    />
                ))}
                {searchCategories.length === 0 && category !== '' && (
                    <CustomPressable
                        onPress={handleAddCategory}
                        className={'flex flex-row gap-x-2 rounded-xl border px-3 py-2'}
                    >
                        <Text className={'text-sm'}>Create category</Text>
                        <Ionicons name={'add'} size={20} className={'text-gray-500 ml-2'} />
                    </CustomPressable>
                )}
            </CustomView>
            <CustomPressable
                onPress={handleAddExpense}
                className={
                    'bg-black rounded-xl w-full py-2 px-4 flex flex-row gap-x-2 items-center justify-center mt-5'
                }
            >
                <Ionicons name={'add'} size={30} className={'text-white'} color={'white'} />
                <Text className={'text-lg text-white'}>Add expense</Text>
            </CustomPressable>
        </CustomView>
    );
};

export default AddExpense;
