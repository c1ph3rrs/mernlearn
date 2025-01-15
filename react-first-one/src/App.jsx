import './App.css'
import Button from './components/button'
import UserCard from './components/UserCard'
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>

      <Button incrementCount={handleClick} 
      text="Click Me" >
        <h1>{count}</h1>
      </Button>

      {/* <UserCard name="Ibrahim Akram" desc="Full stack app developer"/>
      <UserCard name="Ib Mughal" desc="Full stack app developer"/> */}
    </div>
  )
}

export default App
