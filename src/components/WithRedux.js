// pakai Proops biasa, tanpa redux

// import React, { useState } from 'react'
// import TanpaRedux1 from './TanpaRedux1'

// export default function WithRedux() {

//     const [ name, setName ] = useState('renaldy')

//   return (
//     <div>
//         With Redux {name}
//         <TanpaRedux1 name={name}></TanpaRedux1>
//     </div>
//   )
// }


import React from 'react'
import { FolderRedux1 } from './Redux1'

export default function WithRedux() {
  return (
    <div style={{padding: '30px'}}>
        WithRedux
        <br></br>
        <FolderRedux1/>
    </div>
  )
}
