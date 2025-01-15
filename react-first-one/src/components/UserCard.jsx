import React from 'react'
const UserCard = (props) => {
  return (
    <div>
        <h1>{props.name}</h1>,
        <img src="https://avatars.githubusercontent.com/u/77426509?v=4" alt="Ibrahim Akram" />
        <p>{props.desc}</p>
    </div>
  )
}

export default UserCard
