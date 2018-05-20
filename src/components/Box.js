import React from 'react';
// import logo from './logo.svg';
import './Box.css';

class Box extends React.Component{
    render(){
        return (
    <div className="tc bg-light-blue dib pa2 ma2 br3 grow b--blue shadow-3">
        <img src={"https://robohash.org/" + this.props.name + ".png?size=200x200"} alt="box" />
        <div>
        <h3>{this.props.name}</h3>
        <p>{this.props.email}</p>
        </div>
    </div>
    );
    }   
}

export default Box;
