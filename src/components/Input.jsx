import React from 'react';
import "../accets/css/components-style/button.css"

function Input(props) {

    const onChange = ({target:value}) => {
        props.func && props.func(value.value)
    }

    return(
        <input
            value={props.value}
            onChange = {onChange}
            style={{textAlign:`${props.align}`,width:`${props.width}`}}
            placeholder={props.placeholder}
            className={`button`}
            type={props.type}
            id={props.id}
        />
    );


}

export default Input;