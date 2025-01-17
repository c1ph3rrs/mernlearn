import './App.css'
import { createBrowserRouter, RouterProvider} from "react-router";
import Dashboard from './components/Dashboard';
import About from './components/About';
import User from './components/User';

const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: <Dashboard />
    },
    {
      path: "/about",
      Component: <About />
    },
    {
      path: "/user",
      Component: <User />
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
