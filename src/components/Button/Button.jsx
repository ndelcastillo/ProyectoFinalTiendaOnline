import React, { useState } from 'react';
import "./button.css";

/* Hook de useState */

function Button(props) {
   const [color, setColor] = useState ("rgb(40, 40, 40")
 
    function handleClick (){
        props.onClick && props.onClick();
        setColor(props.color);
    }

    return (
        <div className='cardBtn'>
            <button 
                onClick={handleClick}
                className='cardBtn1'
            >
                {props.children}
            </button>
        </div>
    )
}

export default Button
