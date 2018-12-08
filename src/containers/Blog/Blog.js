import React, { Component } from 'react';
//import axios from 'axios';
// import axios from '../../axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost';  // Lazily loaded now


const AsyncNewPost = asyncComponent(() => {
    // here return import() means, whatever will come in this import() parenthesis will
    // only imported when this function executed.
    return import('./NewPost/NewPost'); // Original path to NewPost
});

class Blog extends Component {
    state = {
        auth: true
    }

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/* <li><a href="/">Home</a></li> */}
                            <li>
                                <NavLink 
                                    to="/posts/" 
                                    exact 
                                    activeClassName="active" 
                                    activeStyle={{color: '#fa923', textDecoration: 'underline'}}>Posts
                                </NavLink>
                            </li>

                            {/* 
                                hash: To jump on specific section in a page when page loads
                                search: To pass query parameters
                            */}
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>

                <Switch>
                    {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                    <Route path="/" exact render={() => <h1>Home2</h1>} /> */}
                    
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                    <Route path="/posts" component={Posts} />

                    {/* Must always be defined in <Switch> else, only "to" will work */}
                    {/* <Redirect from="/" to="/posts" /> */}

                    {/* Or use this alternative of <Redirect> */}
                    {/* <Route path="/" component={Posts} /> */} 

                    {/* This will catch all links which are not found */}
                    {/* It must be defined at last */}
                    {/* Note: Now even "/" will show "Not found" */}
                    {/* Since we are not using <Redirect> */}
                    <Route render={() => <h1>Not found</h1>} />                    
                </Switch>
            </div>
        );
    }
}

export default Blog;