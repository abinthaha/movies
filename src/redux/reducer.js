import {
    ADD_USER
} from './action';
const initialState = {
    users: [{
        username: 'abinthaha@gmail.com',
        name: 'Abin Thaha Azeez',
        password: 'Test'
    }, {
        username: 'alex@gmail.com',
        name: 'Alex Jacob',
        password: 'Test1'
    }],
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_USER:
            return {
                users: [
                    ...state.users, action.data,
                ],
            };

        default:
            return state;
    }
}

export default userReducer;