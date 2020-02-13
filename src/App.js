import React from 'react';
import NameMap from './NameMap';



class App extends React.Component {

  state = {
    nameList: [],
    value: ''

  }


  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleAddName = () => {
    const names = [...this.state.nameList]
    names.push(this.state.value)
    this.setState({
      nameList: names,

    })
  }

  handleDelete(name) {
    let listOfNames = this.state.nameList.slice()
    listOfNames = listOfNames.filter(name => name !== name)
    console.log(listOfNames);
    this.setState({
      nameList: listOfNames,
    })
  }



  handleResetClick = () => {
    this.setState({
      value: ''
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

        <button onClick={this.handleAddName}>Add me</button>
        <button onClick={this.handleResetClick}>Reset</button>

        {this.state.nameList.map(name =>
          <NameMap
            key={name}
            nameValue={name}
            onDelete={this.handleDelete.bind(this, name)}
          />
        )}

      </div>
    )
  }


}

export default App;
