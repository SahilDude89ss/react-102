import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import AppLayout from "../layouts/AppLayout";
import Post from '../components/Post';

/**
 *
 */
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {
                    title: 'First Post',
                    body: 'A little about the post!'
                }
            ]
        };
    }

    render() {
        const postItems = this.state.posts.map((post) => {
            return <Post title={post.title} body={post.body}/>
        });
        return <AppLayout>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <h1 className="my-4">Shop Name</h1>
                        <div className="list-group">
                            <Link to="/" className="list-group-item active">Posts</Link>
                            <Link to="/posts/new" className="list-group-item">Add New Post</Link>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        {postItems}
                    </div>
                </div>
            </div>
        </AppLayout>

    }
}
