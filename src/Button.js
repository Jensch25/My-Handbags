import React from 'react';

function Button(props) {
    return (
        <button className={"button"} disabled={props.disabled}>{props.value}</button>
    );
}

export default Button;


