import React, {Component} from 'react';
import PostPageLayout from "../layouts/PostPageLayout";
import PostForm from '../components/Posts/PostForm'

export default class extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <PostPageLayout pageTitle={`New Post`}>
            <div className="row">
                <div className="col-sm-12">
                    <div className="well">
                        <PostForm />
                    </div>
                </div>
            </div>
        </PostPageLayout>
    }
}
