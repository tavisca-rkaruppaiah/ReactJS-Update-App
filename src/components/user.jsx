import React from 'react';
const user = (props) => {
    return (
        <li>
            <span onClick = {props.getValue}>{props.name}</span>
        </li>
    )
}

export default user;