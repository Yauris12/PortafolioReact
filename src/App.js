import './App.css'
import React from 'react'

import Header from './Header'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Atras from './Atras'

export default class App extends React.Component {
  constructor(props) {
    super(props) //Super manda llamar el consturctor de la clase padre
    this.state = {
      pa_Header: true,
      pa_About: false,
      pa_Projects: false,
      pa_Contact: false,
    }
  }

  render() {
    const aboutClick = () => {
      this.setState({ pa_Header: false, pa_About: true })
    }
    const ProjectClick = () => {
      this.setState({ pa_Header: false, pa_Projects: true })
    }
    const ContactClick = () => {
      this.setState({ pa_Header: false, pa_Contact: true })
    }

    const AtrasClick = () => {
      this.setState({
        pa_Header: true,
        pa_Contact: false,
        pa_Projects: false,
        pa_About: false,
      })
    }

    return (
      <>
        <Header
          aboutClick={aboutClick}
          ProjectClick={ProjectClick}
          ContactClick={ContactClick}
          pa_Header={this.state.pa_Header}
        />
        <About pa_About={this.state.pa_About} AtrasClick={AtrasClick} />
        <Projects
          pa_Projects={this.state.pa_Projects}
          AtrasClick={AtrasClick}
        />
        <Contact pa_Contact={this.state.pa_Contact} AtrasClick={AtrasClick} />

        {!this.state.pa_Header && <Atras AtrasClick={AtrasClick} />}
      </>
    )
  }
}
