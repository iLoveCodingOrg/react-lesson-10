import React from 'react'

export default class Child extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <button
        onClick={this.props.updateText}>
        {this.props.text}
      </button>
    )
  }
}