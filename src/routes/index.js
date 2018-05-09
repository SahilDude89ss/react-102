import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import NewPost from "./NewPost";

export default (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/posts/new" component={NewPost}/>
        </Switch>
    </BrowserRouter>
);
