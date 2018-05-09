import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Post extends Component {
    render() {
        const {title, body} = this.props;
        return <div className="card mt-4">
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{body}</p>
            </div>
        </div>
    }
}


Post.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
};

export default Post;
