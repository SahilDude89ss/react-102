import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addPost} from '../../actions/postActions';

/**
 * @class PostForm
 */
class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            body: ""
        };
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();

        // Call action here1
        this.props.addPost(this.state);
    }

    render() {
        return <div className="card mt-4">
            <div className="card-body">
                <form className="form-horizontal" role="form" onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="postTitle">Post Title</label>
                        <input type="text" className="form-control"
                               name={`title`}
                               value={this.state.title}
                               placeholder="Post Title" onChange={this.onChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="postBody">Body</label>
                        <textarea className="form-control"
                                  name={`body`}
                                  placeholder={`Post Body`}
                                  onChange={this.onChange.bind(this)}>{this.state.body}</textarea>
                    </div>
                    <button type="submit"
                            className="btn btn-success">Create new Post
                    </button>

                </form>
            </div>
        </div>
    }
}

const mapStateToPorps = (state) => {}

export default connect(mapStateToPorps, {addPost})(PostForm);
