import {combineReducers} from 'redux';
import ReduxGlobal from './global/actionReducer';

export default combineReducers({
    Global: ReduxGlobal.Reducer,
});
