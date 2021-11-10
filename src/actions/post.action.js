
import axios from "axios";



export const GET_POSTS = 'GET_POSTS';

export const getPosts = () => {

    return (dispatch) => {
        return axios.get('http://localhost:3000/posts?_sort=id&_order=desc').then((response) => {

            dispatch({ type: GET_POSTS, payload: response.data})

        }).catch(error => error.status(500).json({error: error}))
    };

};