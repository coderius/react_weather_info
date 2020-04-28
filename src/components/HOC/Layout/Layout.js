import React, { Component } from 'react'
import MenuTop from '../../../components/Containers/Navigation/MenuTop/MenuTop'
// import $ from 'jquery';
// window.$ = window.jQuery=jquery;
// import  './assets/js/nav.top.js';
// require('./assets/js/nav.top.js');

class Layout extends Component {

    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.layout = React.createRef();
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };
    
    handleScroll(event) {
        const layout = this.layout.current;
        if(window.scrollY > 0){
            layout.classList.add('Layout--scrolled');
        }else{
            layout.classList.remove('Layout--scrolled');
        }
        
        // console.log(window.scrollY, elem.scrollTop);
    };

  render() {

    return (
            <div ref={this.layout} className="Layout">
                <MenuTop />

                <main className="Main">
                    { this.props.children }
                </main>
                
            </div>    

        )
      }
    }
    
    export default Layout;