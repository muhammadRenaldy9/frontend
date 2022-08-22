import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {

  return (
    <div>
      <div>
        <Link to={'/list'}>List Data</Link>
      </div>
      <div>
        <Link to={'/hidden'}>Hidden Data</Link>
      </div>
      <div>
        <Link to={'/dropdown'}>Dropdown Data</Link>
      </div>
    </div>
  )
}

export default Dashboard;