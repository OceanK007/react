import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    // We will see an infinite http requests sending in network tab
    // It is because componentDidUpdate() method will be called over and over
    // when there is an state change occurs, which again calls componentDidUpdate() method
    // And here we are changing state in componentDidUpdate() method
    componentDidUpdate() {
        if(this.props.id) {
            // Solution to fix infinite http requests
            if( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                axios.get('/posts/'+this.props.id)
                .then(response => {
                    //console.log(response);
                    this.setState({loadedPost: response.data});
                });
            }
        }
    }

    deletePostHandler = () => {
        axios.delete('/posts/'+this.props.id)
        .then(response => {
            console.log(response);
        });
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;

        if(this.props.id) {
            post = <p style={{textAlign: 'center'}}>Loading...</p>;
        }
        if(this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>    
            );
        }
        
        return post;
    }
}

export default FullPost;