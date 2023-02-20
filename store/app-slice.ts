import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAppSliceInitialState, IExpenditure } from '../index';

const appSliceInitialState: IAppSliceInitialState = {
    expenditures: [],
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
    },
});

export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;
