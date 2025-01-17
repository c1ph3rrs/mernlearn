import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from './components/Dashboard';
import About from './components/About';
import User from './components/User';
import Navbar from './components/Navbar';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <div>
        <Navbar />
        <Dashboard />
      </div> 
    },
    {
      path: "/about",
      element: <div>
      <Navbar />
      <About />
    </div> 
    },
    {
      path: "/user",
      element: <div>
      <Navbar />
      <User />
    </div>  
    }
  ]
);

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
