///List.js
import React from "react";


const List = ( props ) => {
    console.log(props.classes);
    // <div className="ui relaxed divided list">
    return <div className={props.classes}>  
        {props.children}
    </div>
};

export default List;