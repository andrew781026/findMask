// import {getReduxDispatch, getReduxState} from "../@createStore";

const ActionType = {
    SET_CUSTOMER_DATA: '[CUSTOMER] SET_CUSTOMER_DATA',
    SET_SINGLE_CUSTOMER: '[CUSTOMER] SET_SINGLE_CUSTOMER',
};

const ActionCreator = {
    setCustomerData(customerData) {
        return {
            type: ActionType.SET_CUSTOMER_DATA,
            Data: customerData
        }
    },
    setSingleCustomer(customer) {
        return {
            type: ActionType.SET_SINGLE_CUSTOMER,
            Data: customer
        }
    },
};

const Selector = {
    getCustomerData: (state) => state.Customer.customerData,
    getSingleCustomer: (state) => state.Customer.singleCustomer,
};

const initialState = {
    customerData: [],
    queryInfo: {},
    singleCustomer: {}
};

const Reducer = function (state = initialState, action) {
    switch (action.type) {
        case ActionType.SET_CUSTOMER_DATA: {
            return {
                ...state,
                customerData: action.Data,
            };
        }
        case ActionType.SET_SINGLE_CUSTOMER: {
            return {
                ...state,
                singleCustomer: action.Data,
            };
        }
        default: {
            return state;
        }
    }
};

const AsyncMethods = {



};

const ReduxCustomer = {ActionType, ActionCreator, Reducer, Selector, AsyncMethods};

export default ReduxCustomer;
