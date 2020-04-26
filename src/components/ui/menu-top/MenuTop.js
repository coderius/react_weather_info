import React, { Component } from "react";
import logo from "../../../assets/img/svg/logo.svg";

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
        
        console.log(window.scrollY, elem.scrollTop);
    };

    render() {
        return (
            <div ref={this.nav} id="nav-main" className="font-stack-Montserrat--regular text-upper">
                <div className="row-container">
                    <a id="logo" href="/">
                        <img src={logo} alt="Weather Themes" />
                        <span className="logo__slogan">Weather Info</span>
                    </a>
                    <nav>
                        <ul className="menu">
                        <li className="menu-wrapper">
                            <a href="/" className="menu-item">
                            Home
                            </a>
                        </li>
                        <li className="menu-wrapper">
                            <a href="/" className="menu-item">
                            All
                            </a>
                        </li>
                        <li className="menu-wrapper">
                            <a href="/" className="menu-item">
                            History
                            </a>
                        </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default MenuTop;
