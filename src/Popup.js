import React from 'react';


 class Popup extends React.Component {
handleClick = () => {
    this.props.toggle();
}


    render () {
        return (

<div className="modal fade" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Update</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
     Are you sure that you want to update this model?    
      <h1> Hey {this.props.nameValue} </h1>
      </div>
      <div className="modal-footer">
        <button onClick={this.handleClick} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button  type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

        ) 
    }
 }




 export default Popup;