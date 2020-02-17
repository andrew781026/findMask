import {getReduxDispatch, getReduxState} from "../@createStore";

const ActionType = {
    SET_MAP_CENTER: '[MAP] SET_MAP_CENTER',
    SET_DISTANCE: '[MAP] SET_DISTANCE',
    SET_MASK_TYPE: '[MAP] SET_MASK_TYPE',
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
    setMaskType(maskType) {
        return {
            type: ActionType.SET_MASK_TYPE,
            Data: maskType
        }
    },
};

const Selector = {
    getMapCenter: (state) => state.Map.mapCenter,
    getDistance: (state) => state.Map.distance,
    getMaskType: (state) => state.Map.maskType,
};

const initialState = {
    mapCenter: {
        lat: 25.034180,
        lng: 121.564517,
    },
    distance: {
        meter: 5 * 1000
    },
    maskType: 'adult' // maskType : adult . child
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
        case ActionType.SET_MASK_TYPE: {
            return {
                ...state,
                maskType: action.Data,
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