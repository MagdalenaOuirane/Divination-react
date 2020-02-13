import React from 'react';


const NameMap = (props) => (


    <div>
        <h1>Hey {props.nameValue} </h1>
        <button onClick={props.onDelete}>Delete</button>
    </div>
)

export default NameMap;