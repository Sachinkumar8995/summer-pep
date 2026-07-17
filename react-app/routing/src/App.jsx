import { useState } from 'react'
import './App.css'
import SignupPage from './componenets/SignupPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <SignupPage />
    </div>
  )
}

export default App
