import * as AT from '../actions/actionTypes';

const initialState = {
    list: [],
    companies: [],
    user: {}
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case AT.GET_USERS_DATA:
            return { ...state, ...action.payload };
        case AT.GET_SINGLE_USER_DATA:
            return { ...state, user: action.payload };
        default:
            return state;
    }
}
