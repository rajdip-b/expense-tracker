export type TExpenseCategory = string;

export interface IExpenditure {
    id: number;
    amount: string;
    category: TExpenseCategory;
    date: string;
    note: string;
}

export enum Interval {
    WEEK = 'Week',
    MONTH = 'Month',
    YEAR = 'Year',
}

export interface IExpenditureStats {
    amount: number;
    prevIntervalExpenditurePercentage: number;
    isExpenditureThisIntervalLessThanPrev: boolean;
    interval: Interval;
    category: IExpenditureCategory[];
}

export interface IExpenditureCategory {
    name: TExpenseCategory;
    entries: number;
    totalExpenditure: number;
    expenditureInInterval: number;
}

export interface IExpenseDisplay {
    title: {
        date: string;
        spent: number;
    };
    data: IExpenditure[];
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
