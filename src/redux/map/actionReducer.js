import {getReduxDispatch, getReduxState} from "../@createStore";

const ActionType = {
    SET_MAP_CENTER: '[MAP] SET_MAP_CENTER',
};

const ActionCreator = {
    setMapCenter(center) {
        return {
            type: ActionType.SET_MAP_CENTER,
            Data: center
        }
    },
};

const Selector = {
    getMapCenter: (state) => state.Map.mapCenter,
};

const initialState = {
    mapCenter: {
        lat: 25.034180,
        lng: 121.564517,
    },
};

const Reducer = function (state = initialState, action) {
    switch (action.type) {
        case ActionType.SET_MAP_CENTER: {
            return {
                ...state,
                mapCenter: action.Data,
            };
        }
        default: {
            return state;
        }
    }
};

const Transformer = {};

const AsyncMethods = {};

const ReduxMap = {ActionType, ActionCreator, Reducer, Selector, AsyncMethods};

export default ReduxMap;
