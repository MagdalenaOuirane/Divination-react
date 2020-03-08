import React from 'react';


const NameMap = (props) => (

    <div>


        {/* {props.nameValue.length > 0 ? */}
        <h1> Hey {props.nameValue} </h1>
        {/* : null} */}
        <br />

        <button onClick={props.onUpdate}>Update</button>

        <button onClick={props.onDelete}>Delete</button>

    </div>
)

export default NameMap;