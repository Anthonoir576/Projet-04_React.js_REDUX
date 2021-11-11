
import axios from "axios";



export const GET_USER = 'GET_USER';
export const ADD_USER_LIKE = 'ADD_USER_LIKE';

export const getUser = () => {

    return (dispatch) => {
        return axios.get('http://localhost:3000/users').then((response) => {

            dispatch({ type: GET_USER, payload: response.data})

        }).catch((err) => console.log(err))
    };

};

export const addUserLike = (data) => {

    return (dispatch) => {
        return axios({
        
            method: 'put',
            url: `http://localhost:3000/users/${data.id}`,
            data: { ...data }
        
        }).then((response) => {

            dispatch({ type: ADD_USER_LIKE, payload: { ...data }})

        }).catch((err) => console.log(err));
    };

};