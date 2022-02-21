import React from 'react'
import {Link} from 'react-router-dom'
import { LoginF } from './LoginF'


export const HomePage = () => {
  return (
    <div>


    <div>
        <Link to="/Preq">Sign up</Link>
    </div>

    <LoginF />
    </div>
  )
}
