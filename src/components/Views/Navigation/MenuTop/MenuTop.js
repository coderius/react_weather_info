import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import logo from "../../../../assets/img/svg/logo.svg";

class MenuTop extends Component {

    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.nav = React.createRef();
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };
    
    handleScroll(event) {
        const elem = this.nav.current;
        if(window.scrollY > 0){
            elem.classList.add('et_fixed_nav');
        }else{
            elem.classList.remove('et_fixed_nav');
        }
        
        // console.log(window.scrollY, elem.scrollTop);
    };

    render() {
        return (
            <div ref={this.nav} id="nav-main" className="font-stack-Montserrat--regular text-upper">
                <div className="row-container">
                    <NavLink to='/' exact={true} id="logo">
                        <img src={logo} alt="Weather Themes" />
                        <span className="logo__slogan">Weather Info</span>
                    </NavLink>
                        
                    
                    <nav>
                        <ul className="menu">
                        <li className="menu-wrapper">
                            <NavLink to='/' exact={true} className="menu-item" activeClassName='menu-item--active'>In World</NavLink>
                        </li>
                        <li className="menu-wrapper">
                            <NavLink to='/weather/city/NewYork' exact={true} className="menu-item" activeClassName='menu-item--active'>In City</NavLink>
                        </li>
                        <li className="menu-wrapper">
                            <NavLink to='/weather/country/NewYork' className="menu-item" activeClassName='menu-item--active'>In Country</NavLink>
                        </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default MenuTop;
