import React from 'react'
import Child from './Child'

export default class Parent extends React.Component {
  constructor() {
    super();

    this.state = {
      info: 'Aziz'
    }

    this.updateText = this.updateText.bind(this)
  }

  updateText(){
    this.setState({
      info: 'Aziz Ali'
    })
  }

  render() {
    return (
      <div>
        <Child
          updateText={this.updateText}
          text={this.state.info} />
      </div>
    )
  }
}