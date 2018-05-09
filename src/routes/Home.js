import React, {Component} from 'react';
import Post from '../components/Posts/Post';
import PostPageLayout from "../layouts/PostPageLayout";
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentWillMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                this.setState({posts: response.data})
            })
    }

    render() {
        const postItems = this.state.posts.map((post) => {
            return <Post title={post.title} body={post.body}/>
        });
        return <PostPageLayout>
            {postItems}
        </PostPageLayout>

    }
}

export default Home;
