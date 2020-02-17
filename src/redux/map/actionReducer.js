import {getReduxDispatch, getReduxState} from "../@createStore";

const ActionType = {
    SET_MAP_CENTER: '[MAP] SET_MAP_CENTER',
    SET_DISTANCE: '[MAP] SET_DISTANCE',
};

const ActionCreator = {
    setMapCenter(center) {
        return {
            type: ActionType.SET_MAP_CENTER,
            Data: center
        }
    },
    setDistance(distance) {
        return {
            type: ActionType.SET_DISTANCE,
            Data: distance
        }
    },
};

const Selector = {
    getMapCenter: (state) => state.Map.mapCenter,
    getDistance: (state) => state.Map.distance,
};

const initialState = {
    mapCenter: {
        lat: 25.034180,
        lng: 121.564517,
    },
    distance: {
        meter: 5 * 1000
    },
    maskType: '' // maskType : adult . child
};

const Reducer = function (state = initialState, action) {
    switch (action.type) {
        case ActionType.SET_MAP_CENTER: {
            return {
                ...state,
                mapCenter: action.Data,
            };
        }
        case ActionType.SET_DISTANCE: {
            return {
                ...state,
                distance: action.Data,
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
