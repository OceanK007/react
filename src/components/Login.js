import React, { Component } from 'react';

import AuthContext from '../containers/auth-context';

class Login extends Component {
    // It tells react, which context this component should connect to
    static contextType = AuthContext;

    // Using this new approach, we can access context anywhere outside, like 
    componentDidMount() {
        console.log(this.context);
    }

    render() {
        return (
            <button onClick={this.context.toggleAuth}>
              {this.context.isAuth ? 'Logout' : 'Login'}
            </button>
        );
    }
}

export default Login;
