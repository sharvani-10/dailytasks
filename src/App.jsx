import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let name = "Alex Johnson"
  console.log("Name:",name)
  let age = 25
  console.log("Age:",age)
  let isStudent = true
  console.log("isStudent:",isStudent)
  let hobbies = ["reading","cycling","coding"]
  console.log("hobbies",hobbies)
  let address = {
    street:"123 Main st",
    city:"New York",
    Zipcode:"10001"
  }
console.log("address",address)

let lastLogin = null;
console.log("Last Login:",lastLogin)
  return (
    <div>
      <h1 className = "text">Profile Section</h1>
      <h2>"Name:" {name}</h2>
      <h2>"Age:" {age}</h2>
      <h2>"isStudent:" {isStudent}</h2>
      <h2>"hobbies:" {hobbies}</h2>
      <h2>"Address:"{address}</h2>
      <h2>"Last Login:" {lastLogin}</h2>
    </div>
  )
}

export default App
