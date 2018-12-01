import React, { Component } from 'react';

// Returning functional component using HOC
// const withClass = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props} />
//         </div>
//     )
// }

// Returning class component using HOC
const withClass = (WrappedComponent, className) => {
    return class extends Component {   // Anonymous class
        render() {
            return (
                <div className={className}>
                    <WrappedComponent {...this.props} />
                </div>
            )
        }
    }
}

export default withClass;