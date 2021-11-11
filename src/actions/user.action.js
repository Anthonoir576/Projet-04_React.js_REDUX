
import axios from "axios";



export const GET_USER = 'GET_USER';

export const getUser = () => {

    return (dispatch) => {
        return axios.get('http://localhost:3000/users').then((response) => {

            dispatch({ type: GET_USER, payload: response.data})

        }).catch(error => error.status(500).json({error: error}))
    };

};