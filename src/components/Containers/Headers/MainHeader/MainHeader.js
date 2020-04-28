import React, { Component } from "react";
import { NavLink } from 'react-router-dom'

class MainHeader extends Component {

    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <header className="MainHeader">
                <h1>{this.props.title}</h1>
                {this.props.desc}
                <p>{this.props.buttonText}</p>
            </header>
        );
    }
}

export default MainHeader;
