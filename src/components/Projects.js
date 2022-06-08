import React from 'react'
import '../css/Projects.css'
import exchangeIt from '../assets/exchange-it.PNG'
import repos from '../assets/repos.PNG'
import shootingStars from '../assets/shoot-for-the-stars.PNG'
import meleeQuiz from '../assets/melee-quiz.PNG'

const Projects = ({setToggleModal, toggleModal, setModalNumber}) => {


  return (
    <div className='projects-container'>
        <img src={repos} />
        <p id='projects-title'>
          <span>P</span><span>R</span><span>O</span><span>J</span><span>E</span><span>C</span><span>T</span><span>S</span>
          
        </p>

        

      <div className='project-card-list'>

        <div className='project-card' onClick={() => {
          setModalNumber(1)
          setToggleModal(true)
        }}>
          <h2>Exchange It</h2>
          <img src={exchangeIt}/>
          <p>An informational, always <br /> up-to-date exchange rate application.</p>
        </div>

        <div className='project-card' onClick={() => {
          setModalNumber(2)
          setToggleModal(true)
        }}>
          <h2>Shoot for the Stars</h2>
          <img src={shootingStars}/>
          <p>3D interactive space <br /> for business queries.</p>
        </div>

        <div className='project-card' onClick={() => {
          setModalNumber(3)
          setToggleModal(true)
        }}>
          <h2>Frame Data Quiz</h2>
          <img src={meleeQuiz}/>
          <p>Multiple choice frame <br />data quiz for melee.</p>
        </div>

      </div>

    </div>
  )
}

export default Projects