import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

    const navigate = useNavigate();
    function handleClick() { 
        navigate('/');
    }


  return (
    <div>
          About
          <button onClick={handleClick} >Move to next Page</button>
    </div>
  )
}

export default About
