import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        console.log(this.props);
        
        axios.get('/posts')
        .then(response => {
            // console.log(response);
            const posts = response.data.slice(0,4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Ocean'
                }
            })
            this.setState({posts: updatedPosts});
        })
        .catch(error => {
            console.log(error);
            //this.setState({error: true})
        });
    }

    postSelectedHandler = (id) => {
        // history.push() method allows you to push a new page on the stack of pages
        // Since navigation just means a stack of pages, that's why forward and backward
        // buttons work in browsers.
        this.props.history.push({pathname: '/' + id});
        // this.props.history.push('/' + id);   // Or simply this
    }

    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>;

        if(!this.state.error) {
            posts = this.state.posts
            .map(post => {
                return (
                    // <Link to={'/'+post.id} key={post.id} >
                        <Post 
                            key={post.id}
                            title={post.title} 
                            author={post.author} 
                            clicked={() => this.postSelectedHandler(post.id)}
                        />
                    // </Link>
                )
            });
        }

        return (
            <section className="Posts">
                {posts}
            </section>
        )
    }
}

export default Posts;