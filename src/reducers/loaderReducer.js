import * as AT from '../actions/actionTypes';
const initialState = false;

export const loaderReducer = (state = initialState, action) => {

    switch (action.type) {
        case AT.IS_LOADING_SHOW:
            return true;
        case AT.GET_SINGLE_USER_DATA:
        case AT.GET_USERS_DATA:
            return false;
        default:
            return state;
    }
}