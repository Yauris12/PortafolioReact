import React from 'react'
import './About.css'
export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        {this.props.pa_Contact && (
          <>
            <div className='contacts'>
              <h1 className='animate__animated animate__fadeInUp'>Contactos</h1>

              <main className='main-about'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  architecto vel facere possimus fugit nihil, aperiam, iure
                  recusandae vero nam qui, natus illo dolor corporis!
                  Consequatur error necessitatibus sunt nobis?.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                  velit debitis dolores repellendus beatae optio ad, dolore id
                  odio sed, atque, delectus ab provident. Odio laboriosam
                  obcaecati eum illo perspiciatis.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  atque a quos sapiente maiores minus repudiandae reprehenderit,
                  iusto eum neque eius? Mollitia deserunt accusamus inventore
                  porro, esse assumenda nemo. Delectus.
                </p>
              </main>

              <ul className='flex-redes'>
                <li>Gmail</li>
                <li>Facebook</li>
                <li>GitHub</li>
                <li>Celular</li>
              </ul>
            </div>
            {/* <h2 onClick={this.props.AtrasClick}>Atras</h2> */}
          </>
        )}
      </>
    )
  }
}
