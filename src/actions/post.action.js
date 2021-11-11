
import axios from "axios";



export const GET_POSTS = 'GET_POSTS';
export const ADD_POSTS = 'ADD_POSTS';

export const getPosts = () => {

    return (dispatch) => {
        return axios.get('http://localhost:3000/posts?_sort=id&_order=desc').then((response) => {

            dispatch({ type: GET_POSTS, payload: response.data})

        }).catch(error => error.status(500).json({error: error}))
    };

};

export const addPost = (data) => {

    return (dispatch) => {
        return axios.post('http://localhost:3000/posts', data).then((response) => {

            dispatch({ type: ADD_POSTS, payload: data})

        }).catch(error => error.status(500).json({error: error}))
    };

};