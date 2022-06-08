import React from 'react'
import { VscChromeClose } from 'react-icons/vsc'
import { AiOutlineMinus } from 'react-icons/ai'
import { FaRegSquare } from 'react-icons/fa'
import '../css/Terminal.css'

const Terminal = () => {


  return (
        <div id='terminal'>

                <div id='terminal-top-bar'>
                    <p>:/C/Users/Mykael Barnes/Desktop/Projects/mykael-barnes</p>
                    <AiOutlineMinus className='top-bar-icon minus'/>
                    <FaRegSquare className='top-bar-icon square' />
                    <VscChromeClose className='top-bar-icon close' />
                </div>

                <div id='terminal-text'>

                    <div id='terminal-text-header'>
                        <p> Mykael Barnes@LAPTOP</p>
                        <p> ~/Desktop/Projects/mykael-barnes</p>
                        <p> (master)</p>
                    </div>

                    <p>$ Hi, I'm Mykael Barnes!</p>
                    <p>$ I am currently a junior level web developer.</p>
                    <p>$ My main focus is around the react javascript library. <br /> Web development is my main hobby, as well as my career.</p>
                    <p>$ Thanks for stopping by, and feel free to check out <br /> more info on me below!</p>

                    <div id='terminal-typing-bar'>
                        <p>$</p> <p>|</p>
                    </div>
                    
                </div>
        </div>
                
  )
}

export default Terminal