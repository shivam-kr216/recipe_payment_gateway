import React, { Component } from 'react';
class Failure extends Component {
    render() { 
        return ( 
            <div className="main-container">
                <div className="failure-msg">
                    <img src={require('../images/failure.jpg')} alt="Payment Failure"/>
                </div>
            </div>
         );
    }
}
 
export default Failure;