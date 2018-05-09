import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Post from '../components/Posts/Post';
import {connect} from 'react-redux';

import PostPageLayout from "../layouts/PostPageLayout";
import PostForm from '../components/Posts/PostForm'
import {fetchPosts} from '../actions/postActions';

class Home extends Component {
    componentWillMount() {
        // Call action here
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        const postItems = this.props.posts.map((post) => {
            return <Post key={post.title} title={post.title} body={post.body}/>
        });
        return <PostPageLayout>
            <PostForm />
            {postItems}
        </PostPageLayout>
    }
}

Home.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
};

Home.defaultProps = {
    posts: []
};

/**
 *
 * @param state
 * @returns {{posts: Array}}
 */
const mapStateToProps = (state) => {
    return {
        posts: state.post.posts,
        newPost: state.post.post
    }
};

export default connect(mapStateToProps, {fetchPosts})(Home);
