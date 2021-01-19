import React, { Component } from 'react';
class Success extends Component {
    render() { 
        return ( 
            <div className="main-container">
                <div className="success-msg">
                    <img src={require('../images/success.png')} alt="Successful Payment"/>
                </div>
            </div>
         );
    }
}
 
export default Success;