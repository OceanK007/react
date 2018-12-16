import React, { Component } from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        // Here making sure, that OrderSummary component won't be called 
        // If Modal has not be displayed.
        // Modal is displaying only when we click "ORDER NOW" button.

        //console.log('nextProps.show: '+nextProps.show);
        //console.log('this.props.show: '+this.props.show);

        // Now here, children can be either modal or loader
        // So, we need to apply one more check here for children.
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    // componentWillUpdate() {
    //     console.log('[Modal] componentWillUpdate')
    // }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div 
                    className={classes.Modal} 
                    style={
                        {
                            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                            opacity: this.props.show ? '1' : '0'
                        }
                    }>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
} 

export default Modal;