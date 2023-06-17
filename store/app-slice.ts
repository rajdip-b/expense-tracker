import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAppSliceInitialState, IExpenditure, TExpenseCategory } from '../types';

const appSliceInitialState: IAppSliceInitialState = {
    expenditures: [],
    expenseCategories: ['Food', 'Travel', 'Shopping', 'Entertainment', 'Other'],
};

const appSlice = createSlice({
    name: 'app',
    initialState: appSliceInitialState,
    reducers: {
        addExpenditure(state, action: PayloadAction<IExpenditure>) {
            state.expenditures.push(action.payload);
        },
        removeExpenditure(state, action: PayloadAction<number>) {
            state.expenditures = state.expenditures.filter(expenditure => expenditure.id !== action.payload);
        },
        clearAllExpenditures(state) {
            state.expenditures = [];
        },
        addExpenseCategory(state, action: PayloadAction<TExpenseCategory>) {
            state.expenseCategories.find(category => category.toLowerCase() === action.payload.toLowerCase()) ||
                state.expenseCategories.push(action.payload.trim());
        },
        removeExpenseCategory(state, action: PayloadAction<TExpenseCategory>) {
            state.expenseCategories = state.expenseCategories.filter(category => category !== action.payload);
            state.expenditures = state.expenditures.filter(expenditure => expenditure.category !== action.payload);
        },
    },
});

export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;
