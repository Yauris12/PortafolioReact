import React from 'react'
import './Projects.css'
import 'animate.css'
import Atras from './Atras'

export default class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        {this.props.pa_Projects && (
          <div className=' projects  '>
            <h1 className='animate__animated animate__fadeInUp'>Projects</h1>

            <main className='main-projects'>
              <div className='card-project'>
                <div className='card-info'>
                  <h2>Clon Pinterest</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum aut aperiam, in inventore sapiente vitae rem
                    assumenda unde fuga nisi fugiat magnam voluptas sunt
                    doloribus blanditiis harum cumque quos odio!
                  </p>
                  <p>Html/Css</p>
                </div>
                <div className='card-img'>
                  <img
                    src={'/images/pinterestMansor.jpg'}
                    alt='person'
                    align='right'
                  />
                </div>
              </div>
              <div className='card-project card-border '>
                <div className='card-img'>
                  <img src={'/images/pokeApi.jpg'} alt='person' align='right' />
                </div>
                <div className='card-info'>
                  <h2>PokeApi</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum aut aperiam, in inventore sapiente vitae rem
                    assumenda unde fuga nisi fugiat magnam voluptas sunt
                    doloribus blanditiis harum cumque quos odio!
                  </p>
                  <p>Html/CSS/Javascript</p>
                </div>
              </div>
              <div className='card-project'>
                <div className='card-info'>
                  <h2>Portafolio</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum aut aperiam, in inventore sapiente vitae rem
                    assumenda unde fuga nisi fugiat magnam voluptas sunt
                    doloribus blanditiis harum cumque quos odio!
                  </p>
                  <p>Html/Css/React Js</p>
                </div>
                <div className='card-img'>
                  <img
                    src={'/images/Portafolio.jpg'}
                    alt='person'
                    align='right'
                  />
                </div>
              </div>
            </main>
            {/* <Atras /> */}
          </div>
        )}
      </>
    )
  }
}
