import React, { useState, useEffect } from 'react'
import axios from 'axios'

const List = () => {

  const [ data, setData ] = useState([]);

  const getData = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/comments`)
    setData(response.data)
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>email</td>
          </tr>
        </thead>
        <tbody>
          {data.map((user,index) => (
            <tr key={user.id}>
            <td>{index+1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default List

