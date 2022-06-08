import React from 'react'
import '../css/Modal.css'
import { useEffect } from 'react'
import exchangeIt from '../assets/exchange-it.PNG'
import meleeQuiz from '../assets/melee-quiz.PNG'
import shootingStars from '../assets/shoot-for-the-stars.PNG'


const Modal = ({modalNumber, setToggleModal}) => {


    useEffect(() => {

    },[])


  return (
    <div className='modal-background' onClick={() => setToggleModal(false)}>

        <div className='modal'>

            {modalNumber == 1 ? <img src={exchangeIt} /> : ''}
            {modalNumber == 2 ? <img src={shootingStars} /> : ''}
            {modalNumber == 3 ? <img src={meleeQuiz} /> : ''}

            {modalNumber == 1 ? <p>Exchange it, is a live, and up-to-date exchange rate single-page<br />
            application for currency. Currently only lists the top ten most popular<br />
            currencies. Created using the <a href='https://exchangeratesapi.io/'>https://exchangeratesapi.io/</a> API.<br />
            Click <a href='https://exchange-it-now.vercel.app/'>Here</a> to Visit!</p> : ''}
            {modalNumber == 2 ? <p>Shooting stars is a business contact page with in-site email.<br />
            Interactive 3D space enviornment created using the THREE.js<br />
            library. Canvas formed strictly using javascript.<br />
            Click <a href='https://mykeb96.github.io/mykael-barnes/'>Here</a> to Visit!</p> : ''}
            {modalNumber == 3 ? <p>This quiz is associated with the game Super Smash Brothers Melee.<br />
            Created using react, and react-router-dom for client-side page routing.<br />
            Dynamically keeps track of inputs using controlled state. Made entirely<br />
            from scratch, with no additional components or libraries.<br />
            Click <a href='https://melee-quiz.vercel.app/'>Here</a> to Visit!</p> : ''}


           
        </div>
    </div>
  )
}

export default Modal