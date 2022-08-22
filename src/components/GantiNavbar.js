// ini pasangan untuk component gantinavbar
// dimana fungsi ini untuk mengganti element navbar jika main di klik 

import React, { useState } from 'react'
import Navbar from './Navbar'

const GantiNavbar = () => {

    const [ NavbarValue, setNavbarValue ] = useState('')

    const changeNavbarValue = () => {
        setNavbarValue('My Contact')
    }

  return (
    <div>
        <Navbar navValue={NavbarValue}></Navbar>

        <button onClick={() => changeNavbarValue()}>Ubah Navigasi</button>
    </div>
  )
}

export default GantiNavbar