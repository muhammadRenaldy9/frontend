import React from 'react'
import TanpaRedux2 from './TanpaRedux2'

export default function TanpaRedux1({name}) {

  return (
    <div>
        Redux1
        <TanpaRedux2 name={name}/>
    </div>
  )
}
