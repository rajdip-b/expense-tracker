export type TExpenseCategory = string;

export interface IExpenditure {
    id: number;
    amount: string;
    category: TExpenseCategory;
    date: string;
    note: string;
}

export type IExpenditureForm = Pick<IExpenditure, 'amount' | 'category' | 'date' | 'note'>;

export interface IAppSliceInitialState {
    expenditures: IExpenditure[];
    expenseCategories: TExpenseCategory[];
}

export interface IStoreState {
    app: IAppSliceInitialState;
}

export type IRootStackParamList = {
    AddExpense: undefined;
    TabbedView: undefined;
};

export type ITabbedView = {
    Expenses: undefined;
    Statistics: undefined;
    Settings: undefined;
};
