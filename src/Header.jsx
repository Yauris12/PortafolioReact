import React from 'react'
import './Header.css'
export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        {this.props.pa_Header && (
          <div className='header-main'>
            {/* <ul className='info'>
          <li>{this.state.nombre}</li> */}
            {/* <li>{this.state.apellido}</li> */}
            {/* </ul>  */}
            <ul className='lista-Header'>
              <li
                className='txt1 animate__animated animate__fadeInUp '
                onClick={this.props.aboutClick}
              ></li>
              <li
                className='txt2 animate__animated animate__fadeInUp'
                onClick={this.props.ProjectClick}
              ></li>
              <li
                className='txt3 animate__animated animate__fadeInUp'
                onClick={this.props.ContactClick}
              ></li>
            </ul>
            <div className='contenemor-img'>
              <img
                className=' animate__animated animate__zoomIn'
                src={'/images/Person.png'}
                alt='person'
                align='right'
              />
            </div>
          </div>
        )}
      </>
    )
  }
}
