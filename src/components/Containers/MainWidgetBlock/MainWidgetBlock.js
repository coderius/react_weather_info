///MainWidgetBlock
import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class MainWidgetBlock extends Component {

    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div className="MainWidgetBlock">
                <h1>{this.props.data}</h1>
            </div>
        );
    }
}

export default MainWidgetBlock;
