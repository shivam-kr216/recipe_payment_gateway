import React, { Component, createRef } from 'react';

class Payment extends Component {
    constructor(props){
        super(props);
        this.state=({
            showOtp: false,
            error:{card:'',
                    cvv:'',
                    otp:''
            },
        });
        this.inputRef = React.createRef();
        this.cvvRef = React.createRef();
        this.cardRef = React.createRef();
    }

    clickEvent=(e)=>{
        if(this.cardRef.current.value==='' || this.cardRef.current.value.length < 11){
            this.setState({error:{card:'Enter a valid card number'}});
			return;
        }
        if(this.cvvRef.current.value==='' || this.cvvRef.current.value.length < 3){
            this.setState({error:{cvv:'Enter a valid CVV'}});
			return;
        }
        else{
            this.setState({showOtp:true});
        }
    }

    matchOtp= (e) =>{
        e.preventDefault();
        if(this.inputRef.current.value==='' || this.inputRef.current.value.length < 6){
            this.setState({error:{otp:'Enter a valid OTP'}});
			return;
        }
        else{
            {this.inputRef.current.value==="123456"?this.props.history.push('/success')
            :this.props.history.push('/failure')}
        }
    }

    render() { 
        const {amount}=this.props.match.params;
        return ( 
            <React.Fragment>
                <div className="container" style={{display:"block"}}>
                    <div className="form-group">
                        <label>Total amount</label>
                        <input type="text" className="form-control" disabled value={amount}/>
                    </div>

                    <div className="form-group" id="card-number-field">
                        <label>Card Number</label>
                        <input type="text" className="form-control" maxLength="11"
                        placeholder="Enter 11-digit card number" ref={this.cardRef} />
                        <span style={{color: "red"}}>{this.state.error.card}</span>
                    </div>

                    <div className="form-group CVV">
                        <label>CVV</label>
                        <input type="text" className="form-control" maxLength="3"
                        placeholder="Enter 3-digit CVV" ref={this.cvvRef} />
                        <span style={{color: "red"}}>{this.state.error.cvv}</span>
                    </div>

                    {this.state.showOtp?<div className="form-group">
                        <label>Enter OTP</label>
                        <input type="text" className="form-control" maxLength="6"
                        placeholder="Enter 6-digit OTP" ref={this.inputRef} />
                        <span style={{color: "red"}}>{this.state.error.otp}</span>
                    </div>:null}

                    {this.state.showOtp?
                    <center><button className="btn btn-success" onClick={this.matchOtp.bind(this)} style={{width:"70%"}}>Verify OTP</button></center>
                    :<center><button className="btn btn-success" onClick={this.clickEvent.bind(this)} style={{width:"70%"}}>Click for OTP</button></center>
                    }
                </div>
            </React.Fragment>
         );
    }
}
 
export default Payment;