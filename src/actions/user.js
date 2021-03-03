import * as AT from './actionTypes';

export const getUsers = () => {
    return async dispatch => {
        dispatch({
            type: AT.IS_LOADING_SHOW,
        });
        const getUserData = await fetch("https://jsonplaceholder.typicode.com/users");
        const json = await getUserData.json();
        const companies = json.map((item) => item.company);
        dispatch({
            type: AT.GET_USERS_DATA,
            payload: {
                list: json,
                companies,
            }
        });
    }
}

export const getSingleUser = (userId) => {
    return async dispatch => {
        dispatch({
            type: AT.IS_LOADING_SHOW,
        });
        const getUserData = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const json = await getUserData.json();
        dispatch({
            type: AT.GET_SINGLE_USER_DATA,
            payload: json
        });
    }
}