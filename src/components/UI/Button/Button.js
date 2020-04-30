import React from "react";

const Button = ( props ) => {
  return <button 
        onClick={props.onClick} 
        className={props.clases}
    >
        {props.text}
    </button>;
};

export default Button;
