import {combineReducers} from 'redux'
import basketReducer from './basket/basketReducer'

const rootReducer = combineReducers({
    basket:basketReducer,

})

export default rootReducer