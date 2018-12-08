import React, { Component } from 'react';
//import axios from 'axios';
// import axios from '../../axios';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
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
                    
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts" component={Posts} />
                </Switch>
            </div>
        );
    }
}

export default Blog;