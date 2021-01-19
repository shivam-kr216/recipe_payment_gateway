import React, { Component } from 'react';
import axios from 'axios';
const Context = React.createContext();

export class Provider extends Component {
    state={
        recipi:[]
    };

    async componentDidMount(){
        const res = await axios.get('http://starlord.hackerearth.com/recipe');
        this.setState({
            recipi: res.data
        });
    }
    
    render(){
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
 
 export const Consumer = Context.Consumer;
