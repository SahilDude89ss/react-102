import React from 'react';
import {Link} from 'react-router-dom';

import AppLayout from "../layouts/AppLayout";

/**
 *
 * @param props
 * @returns {*}
 *
 * @constructor
 */
const PostPageLayout = ({children, pageTitle}) => {
    pageTitle = pageTitle || "Posts"
    return <AppLayout>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <h1 className="my-4">{pageTitle}</h1>
                    <div className="list-group">
                        <Link to="/" 
                              className="list-group-item">Posts</Link>
                        <Link to="/posts/new" 
                              className="list-group-item">Add New Post</Link>
                    </div>
                </div>
                <div className="col-lg-9">
                    {children}
                </div>
            </div>
        </div>
    </AppLayout>
};

export default PostPageLayout
