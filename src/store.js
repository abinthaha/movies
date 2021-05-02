import {
    createStore
} from 'redux'

import userReducer from './redux/reducer';

export const store = createStore(userReducer)