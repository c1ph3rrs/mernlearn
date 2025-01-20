import './App.css'
import { useForm, SubmitHandler } from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <form>
      <div>
        <label>First name</label>
        <input />
      </div>
    </form>
  )
}

export default App
