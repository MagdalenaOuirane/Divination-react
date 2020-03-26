import React from 'react';


const NameMap = (props) => (

    <div>
  
        {/* {props.nameValue.length > 0 ? */}
        <h1> Hey {props.nameValue} </h1>
        {/* : null}  */}

      <div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
       Update
        </button>


<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Update name</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <h1> Are you sure that you want to update name?</h1>
        
        
<p>{props.nameValue}</p>

  </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button onClick={props.onUpdate} type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>



  <br /> 

       

<br/>
 <button onClick={props.onDelete} type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Delete</button>    

 

    </div>
)

export default NameMap;