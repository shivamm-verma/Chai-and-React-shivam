import React,{useContext, useState} from 'react'
import UserContext from '../context/UserContext';
import "../index.css";

function Profile() {
    const { user } = useContext(UserContext);

  if (!user) return <div>Please Login</div>

  return <div className='welc'>Welcome {"-->"}{user.username}{"<--"}</div>
  // fixed user.username to {user.username}
}

export default Profile