import React from 'react'
import './About.css'
export default class Atras extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <li className='flotante-volver' onClick={this.props.AtrasClick}>
          Volver
        </li>
      </>
    )
  }
}
