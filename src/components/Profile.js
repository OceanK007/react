import React, { Component } from 'react';

import AuthContext from '../containers/auth-context';

class Profile extends Component {
    // It tells react, which context this component should connect to
    static contextType = AuthContext;

    render() {
        return <h1>{this.context.isAuth ? 'You are logged in!' : 'Not logged in!'}</h1>
    }
}

export default Profile;
