import {ADD_POST, FETCH_POSTS} from "../../../actions/types";

/**
 *
 * @type {{posts: Array, post: {}}}
 */
const intialState = {
    posts: [],
    post: {}
};

/**
 * @param state
 * @param action
 *
 * @returns {{posts: Array, post: {}}}
 */
export default function (state = intialState, action) {
    switch (action.type) {
        case (FETCH_POSTS):
            return Object.assign({}, state, {posts: action.payload});
        case (ADD_POST):
            return Object.assign({}, state, {post: action.payload});
        default:
            return state;
    }
}
