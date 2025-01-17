import { createContext, useState } from 'react'
import './App.css'
import ObjectA from './components/ObjectA';

const UserContext = createContext();

function App() {
  const [user, setUser] = useState({name: "Ibrahim Akram"});
  return (
    <>
      <UserContext.Provider value={user}>
        <ObjectA />
      </UserContext.Provider>
    </>
  )
}

export default App
export { UserContext }

