import {FETCH_POSTS, ADD_POST} from "./types";
import axios from "axios/index";

/**
 *
 * @returns {Function}
 */
export function fetchPosts() {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                dispatch({type: FETCH_POSTS, payload: response.data});
            })
    }
}

/**
 *
 * @param post
 * @returns {Function}
 */
export function addPost(post) {
    return (dispatch) => {
        // Add Action to create a new Post.
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            post: post
        }).then((response) => {
            dispatch({type: ADD_POST, payload: response.data.post});
        })
    }
}
