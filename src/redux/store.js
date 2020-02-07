import {combineReducers} from 'redux';
import ReduxMask from './mask/actionReducer';
import ReduxPlace from './place/actionReducer';
import ReduxScreen from './screen/index';

export default combineReducers({
    Mask: ReduxMask.Reducer,
    Place: ReduxPlace.Reducer,
    Screen: ReduxScreen,
});
