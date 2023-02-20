export enum ExpenseType {
    FOOD = 'Food',
    TRAVEL = 'Travel',
    ELECTRONICS = 'Electronics',
    STUDY = 'Study',
    UTILITIES = 'Utilities',
    ENTERTAINMENT = 'Entertainment',
    OTHER = 'Other',
}

export interface IExpenditure {
    id: number;
    amount: number;
    type: ExpenseType;
    date: Date;
    description: string;
}

export interface IAppSliceInitialState {
    expenditures: IExpenditure[];
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
