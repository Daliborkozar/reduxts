import { combineReducers } from 'redux'
import bankReducer from './bankReducer'

const reducers = combineReducers({
    bank: bankReducer
})

export default reducers

//type of the reducer
export type State = ReturnType<typeof reducers>