import headerreducer from '../common/header/store/reducer';
import {combineReducers} from "redux-immutable";
import homereducer from '../../src/pages/Home/store/reducer';
import detailreducer from '../pages/Detail/store/reducer';
import loginreducer from '../pages/login/store/reducer';



export default combineReducers({
    header:headerreducer,
    home:homereducer,
    detail:detailreducer,
    login:loginreducer

})

