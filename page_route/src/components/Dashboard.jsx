import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

    const navigate = useNavigate();

    function handleClick() { 
        navigate('/about');
    }

  return (
    <div>
          Dashboard
          <button onClick={handleClick} >Move to next Page</button>
    </div>
  )
}

export default Dashboard
