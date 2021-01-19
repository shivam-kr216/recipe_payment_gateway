import React, { Component } from 'react';
import {Consumer} from '../context';
import {Link} from 'react-router-dom';
class Recipi extends Component {

   handleClick =(e)=>{
        this.setState({
            total:parseFloat(this.state.total)+parseFloat(e.target.value)
        })
   }

   constructor(props){
       super(props);
        this.state=({
            total:0.0
        })
    }
    render() { 
        return(
            <React.Fragment>
                <Consumer>
                    {value =>{
                        const {recipi} = value;
                        return (
                            <div className="container">
                                {recipi.map(r=>(
                                <div className="card-body" key={r.id}>
                                    <div className="image-body">
                                        <img  src= {r.image} alt={r.category}/>
                                    </div>
                                    <div className="name-body">
                                        <h2>{r.name}&nbsp;<sup>{r.label}</sup></h2>
                                    </div>
                                    <div className="price-body">
                                        <span>Price: {r.price}</span>
                                    </div>
                                    <div className="desc-body">
                                        <span>{r.description}</span>
                                    </div>
                                    <center><button className="btn btn-primary" 
                                    value={r.price} onClick={this.handleClick.bind(this)}>
                                        Add to cart</button>
                                    </center>
                                </div>
                                ))}
                            </div>
                        )
                    }}
                    
                </Consumer>
                {this.state.total>0?
                    <Link to={`payment/${this.state.total.toFixed(2)}`}>
                   <button className="btn btn-success">Proceed with Amount {this.state.total.toFixed(2)}</button>
                   </Link>:null}
        </React.Fragment>
        )
    }
}
 
export default Recipi;