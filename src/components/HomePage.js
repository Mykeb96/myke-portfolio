import React from 'react'
import mugshot from '../assets/mykael_barnes.PNG'
import '../css/HomePage.css'
import Modal from './Modal'
import Projects from './Projects'
import Skills from './Skills'
import Terminal from './Terminal'
import { useState } from 'react'

const HomePage = () => {

    const [toggleModal, setToggleModal] = useState(false)
    const [modalNumber, setModalNumber] = useState(0)



  return (
    <div className='homepage-container'>

        <div className='header'>

            <img src={mugshot} id='mugshot'/>
            <Terminal />

        </div>

        <div id='skills-section'>

            <Skills />

        </div>

        <div id='project-section'>

            <Projects setToggleModal={setToggleModal} toggleModal={toggleModal} setModalNumber={setModalNumber} />
            

        </div>

        {toggleModal ? <Modal modalNumber={modalNumber} setToggleModal={setToggleModal} /> : ''}

        <footer>
            <p>Contact Me</p>
        </footer>


    </div>
  )
}

export default HomePage