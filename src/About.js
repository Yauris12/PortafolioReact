import React from 'react'
import './About.css'
import Atras from './Atras'
export default class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        {this.props.pa_About && (
          <div className='header-main about'>
            <h1 className=' animate__animated animate__fadeInUp'>
              I Junior Fron-tend Developer
            </h1>

            <h2 className='h2'>Acerca de Mi</h2>
            <main className='main-about'>
              <p>
                Hola me llamo Alexis, Me apasiona la tecnología , hace no mucho
                comenze aprender desarrollo web con javascript en la bootcamp
                DEV.F , me considera una persona autodidacta , me gusta asumir
                nuevos retos.
              </p>
              <p>
                En mis tiempos libres me gusta jugar algun videojuego, hablar
                con mis amigos ver algunas peliculas y tambien por ahi revisar
                algunos cursos desarrollo web.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                architecto vel facere possimus fugit nihil, aperiam, iure
                recusandae vero nam qui, natus illo dolor corporis! Consequatur
                error necessitatibus sunt nobis?.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                velit debitis dolores repellendus beatae optio ad, dolore id
                odio sed, atque, delectus ab provident. Odio laboriosam
                obcaecati eum illo perspiciatis.
              </p>
              <p>Actualmente sigo aprendiendo a base de pequeños proyectos. </p>
            </main>
            {/* <Atras /> */}
          </div>
        )}
      </>
    )
  }
}
