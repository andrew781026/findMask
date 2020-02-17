import {getReduxDispatch, getReduxState} from "../@createStore";

import MaskService from 'fetch/MedicalStore';

// geolib
import {getDistance} from 'geolib';

const ActionType = {
    SET_MASK_DATA: '[MASK] SET_MASK_DATA',
};

const ActionCreator = {
    setMaskData(maskData) {
        return {
            type: ActionType.SET_MASK_DATA,
            Data: maskData
        }
    },
};

const Selector = {
    getMaskData: (state) => state.Mask.maskData,
    getNearByMasks: (state) => {

        const maskData = state.Mask.maskData;
        const meter = state.Map.distance.meter;
        const center = state.Map.mapCenter;

        return maskData.filter(mask => {

            const distance = getDistance( // getDistance will return meters
                {latitude: center.lat, longitude: center.lng},
                {latitude: mask.geometry.coordinates[1], longitude: mask.geometry.coordinates[0]}
            );

            // console.table({lat: center.lat, lng: center.lng, name: mask.properties.name, distance});

            return distance <= meter;
        });
    },
};

const initialState = {
    maskData: [],
};

const Reducer = function (state = initialState, action) {
    switch (action.type) {
        case ActionType.SET_MASK_DATA: {
            return {
                ...state,
                maskData: action.Data,
            };
        }
        default: {
            return state;
        }
    }
};

const Transformer = {};

const AsyncMethods = {

    async getMaskData() {

        const dispatch = getReduxDispatch();

        const maskData = await MaskService.getStores();
        dispatch(ActionCreator.setMaskData(maskData.features));

        return maskData;
    },

};

const ReduxCustomer = {ActionType, ActionCreator, Reducer, Selector, AsyncMethods};

export default ReduxCustomer;
