import {combineReducers} from 'redux';
import ReduxMap from './map/actionReducer';
import ReduxMask from './mask/actionReducer';
import ReduxPlace from './place/actionReducer';
import ReduxScreen from './screen/index';

export default combineReducers({
    Map: ReduxMap.Reducer,
    Mask: ReduxMask.Reducer,
    Place: ReduxPlace.Reducer,
    Screen: ReduxScreen,
});
