// ini pasangan untuk component gantinavbar
// dimana fungsi ini untuk mengganti element navbar jika main di klik 

import React from 'react'

const Navbar = ({navValue}) => {
  return (
    <div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">{!navValue? "about" : navValue}</a>
          </li>
          <li>
            <a href="#villa">Villa</a>
          </li>
          <li>
            <a href="#testimonials">Testimoni</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
    </div>
  )
}

export default Navbar