import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const HiddenData = () => {

  const [ users, setUsers ] = useState([]);

  const getUsers = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
        setUsers(response.data);
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(()=>{
    getUsers();
  },[]);


  return (
    <div>
      <button onClick={getUsers}>Show Data</button>
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>email</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
            <td>{index +1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default HiddenData