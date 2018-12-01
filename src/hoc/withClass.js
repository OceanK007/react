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
    const WithClass =  class extends Component {   // Anonymous class
        render() {
            return (
                <div className={className}>
                    <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
                </div>
            )
        }
    }

    return React.forwardRef((props, ref) => {
        return <WithClass {...props} forwardedRef = {ref} />;  // forwardedRef name is upto you
    });
}

export default withClass;