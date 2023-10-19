import { DELETE_OPERATION, TYPE_OPERATION } from "./action";

interface Transaction {
    describe: string;
    value: number;
    }

    interface states {
    income: Transaction[];
    cash: number;
    incomeTotal: number;
    egressTotal: number;
    }

    const initialState: states = {
    income: [],
    cash: 0,
    incomeTotal: 0,
    egressTotal: 0,
    };

    export const reducer = (state = initialState, action: any) => {
        switch (action.type) {
            case TYPE_OPERATION:
                if (action.payload.operation === "suma") {
                    return {
                        ...state,
                        income: [...state.income, action.payload],
                        cash: state.cash + action.payload.value,
                        incomeTotal: state.incomeTotal + action.payload.value
                    };
                } else if (action.payload.operation === "resta") {
                    return {
                        ...state,
                        income: [...state.income, action.payload],
                        cash: state.cash - action.payload.value,
                        egressTotal: state.egressTotal + action.payload.value
                    };
                }
                return state;
    
            case DELETE_OPERATION:
                if (action.payload.operation === 'suma' && state.cash >= 0) {
                    return {
                        ...state,
                        income: state.income.filter(inc => inc.describe !== action.payload.describe),
                        cash: state.cash - action.payload.value,
                        incomeTotal: state.incomeTotal - action.payload.value
                    };
                } else if (action.payload.operation === 'resta') {
                    return {
                        ...state,
                        income: state.income.filter(inc => inc.describe !== action.payload.describe),
                        cash: state.cash + action.payload.value,
                        egressTotal: state.egressTotal - action.payload.value
                    }
                }
                return state;
    
            default:
                return state;
        }
    };
    