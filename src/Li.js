import React from "react";

const Li = (props)=>{
    return(
        <div className="todo_style">
            <button className="bt" onClick={()=> {
                props.onSelect(props.id);
            }} >-</button>
            <br/>
            <li> {props.value} </li>
        </div>
    )
}
export default Li;