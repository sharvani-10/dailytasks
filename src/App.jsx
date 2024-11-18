import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let name = "Alex Johnson"
  console.log(name)

  return (
    <div>
      <h1>welcome to {name}</h1>
    </div>
  )
}

export default App
