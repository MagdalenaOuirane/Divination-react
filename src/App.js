
import React from 'react';
import NameMap from './NameMap';



class App extends React.Component {

  state = {

    users: [],
    value: '',
  }





  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }


  handleAddName = (event) => {
    console.log('handleAddName');
    const names = [...this.state.users];



    names.push({

      name: this.state.value,
      id: Date.now(),
    })

    this.setState({
      users: names,
    })
    console.log(names);
  }

  handleDelete(id) {
    console.log('handleDelete:', id)
    let listOfUsers = this.state.users.slice()
    console.log(listOfUsers);
    listOfUsers = listOfUsers.filter(user => id !== user.id) // return filtered list but if user returns true then the element will be deleted 
    console.log(listOfUsers);
    this.setState({
      users: listOfUsers,
    })
  }



  handleResetClick = () => {
    this.setState({
      value: ''
    })
  }

  handleUpdateName(id) {
    console.log("handleupdate id: ", id)
    let updatedUsers = [...this.state.users];
    console.log(updatedUsers);

    updatedUsers = updatedUsers.map(user => id === user.id ? { ...user, name: this.state.value } : user)

    console.log(updatedUsers);
    this.setState({
      users: updatedUsers,
    })
  }



  render() {


    return (
      <div>
        <label>
          Name:
<input
            type='text'
            value={this.state.value}
            onChange={this.handleInputChange}
          />
        </label>

        <button
          onClick={this.handleAddName}>Add me</button>

        <button onClick={this.handleResetClick}>Reset</button>



        {this.state.users.map(user =>
          <NameMap
            key={user.id}
            id={user.id}
            nameValue={user.name}
            onDelete={this.handleDelete.bind(this, user.id)}
            onUpdate={this.handleUpdateName.bind(this, user.id)}
          />
        )}

      </div>
    )
  }


}

export default App;