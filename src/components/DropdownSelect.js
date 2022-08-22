// // Dropdown dengan react-select.

// // import React from 'react'
// // import { useState, useEffect } from 'react'
// // import Select from 'react-select'

// // const DropdownSelect = () => { 

// //     const [ users, setUsers ] = useState([])

// //     const getUsers = async () => {
// //         const response = await fetch(`https://pokeapi.co/api/v2/berry/`)
// //         const datas = await response.json()
// //         const result = datas.results.map(user => {
// //           return {
// //             label: user.name,
// //             value: user.name
// //           }
// //         })
// //         setUsers(result)
// //     }

// //     useEffect(() => {
// //         getUsers()
// //     }, [])
    
// //   return (
// //     <div>
// //       <Select options={users}></Select>
// //     </div>
// //   )
// // }

// // export default DropdownSelect



// // Dropdown dengan react-select.
// // css internal dengan styled.component.
// // export Default dengan function expresion.
// import React, { useEffect, useState } from 'react'
// import Select from 'react-select'
// import styled from 'styled-components'

// export default function DropdownSelect() {

//   // usestate dengan empty array karena data'nya array
//   const [ users, setUsers ] = useState([])
//   const [ clickData, setClickData] = useState("")
//   const [ isShow, setIsShow ] = useState(false)

//   // gunakan async await saat fetch data.
//   const getUsers = async () => {
//     const response = await fetch(`https://pokeapi.co/api/v2/berry/`)
//     const value = await response.json()  
//     const result = value.results.map(user => {    // loop datanya untuk ganti property bawaan/asli ke default react-select yaitu harus ada label & value
//       return {
//         label: user.name,
//         value: user.name
//       }
//     })
//     // setUsers(result)
//     setUsers(result.sort((a, b) => a.label.localeCompare(b.label))) // buat sortir output dari a-z
//   }

//   useEffect(() => {
//     getUsers()
//   }, [])

//   const handleSubmit = () => {
//     setIsShow(state => !state) //callback'nya dari state react (untuk tampil dan tidak)
//   }

//   const handleChange = (value) => {
//     setClickData('heii..'+value)
//   }

//   return (
//     <Section>
//     <div className='wrapper'>
//       <h2>{isShow ? clickData : "" }</h2>
//       <button onClick={() => handleSubmit()} disabled={!clickData}>{isShow ? "Hide Button" : "Show Values"}</button>
//       <Select options={users} onChange={(e) => handleChange(e.value)}></Select>
//     </div>
//     <div className='wrapper2'>div 2</div>
//     </Section>
//   )
// }
// const Section = styled.section`
//   margin-top: 0px;
//   padding: 5rem;
//   padding-top:0;
//   .wrapper { 
//     margin-top:50px;
//     padding-top: 50px;
//     background-color: red;
//   }

//   .wrapper2 {
//     background-color: blue;
//   }
// `;

// // export default DropdownSelect




import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import Styled from 'styled-components'

const DropdownSelect = () => {

  const [ data, setData ] = useState([])
  const [ data2, setData2 ] = useState([])
  const [ clickData, setClick ] = useState(false)
  const [ changeData, setChange ] = useState('')

  const getData = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/berry/`)
    const datas = await response.json()
    const resultData = datas.results
    setData(resultData)
  }

  useEffect(() => {
    getData()
    mapdata()
  }, [])

  const mapdata = () => {
    const resultMap = data.map(user => {
      return {
        label: user.name,
        value: user.name
      }
    })
    console.log(resultMap);
    setData2(resultMap)
  }

  const handleClick = () => {
    setClick(state => !state )
  }

  const handleChange = (e) => {
    setChange('Hello '+e)
  }

  return (
    <Section>
    <div className='wrapper1'>
      <h1>{clickData ? changeData : ''}</h1>
      <button onClick={() => handleClick()} disabled={!changeData}>{clickData ? 'hide' : 'Show'}</button>
      <Select options={data2} onChange={(e) => handleChange(e.value)}></Select>
    </div>
    </Section>
  )
}

const Section = Styled.section `
  .wrapper1 {
    padding: 30%;
  }

  button {
    width: 80px;
    margin-bottom: 5px;
    border-radius: 50px;
    color: white;
    font-weight: bold;
    background-color: green;
  }
`




export default DropdownSelect