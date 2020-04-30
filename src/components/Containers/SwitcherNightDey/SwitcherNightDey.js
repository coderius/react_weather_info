///SwitcherNightDey
import React, { Component } from "react";
import Button from "../../UI/Button/Button"
import { connect } from "react-redux";
import {
  toggleLayoutThemeAction
} from "../../../Redux/actions";

///Switch state by click in button. Change design site by add bg color etc.
class SwitcherNightDey extends Component {
    constructor(props) {
      super(props);
      
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.props.toggleLayoutTheme();
    }

    render() {
      console.log(this.props.layoutReducer.layoutTheme);
      return (
        <>
            <Button onClick={this.handleClick} clases="buttont-night-dey" text="Switch Me!" />
        </>
      );
    }
  }
  
  // const mapStateToProps = state => {
  //   return {
  //     layoutTheme: state.layoutReducer
      
  //   };
  // };
  
  const mapStateToProps = state => ({
    ...state //assess to layoutTheme by this.props.layoutReducer.layoutTheme
  });

  const mapDispatchToProps = dispatch => ({
    toggleLayoutTheme: () => dispatch(toggleLayoutThemeAction())
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(SwitcherNightDey);

  