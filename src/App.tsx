import { useState } from "react"
import Input from "./Components/Inputs"


function App() {
  const [details, setDetails] = useState({
    name: "", 
    email: "",
    phone: "",
  })

  const inputConsole = (target: EventTarget & HTMLInputElement) => {
    const {name,value} = target
    setDetails((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  console.log(details, "from triggered")

  return (
    <>
      <Input 
        value={details.name} 
        label="name" 
        changeHandler={inputConsole} 
      />
      <Input 
        value={details.email} 
        label="email" 
        changeHandler={inputConsole} 
      />
      <Input 
        value={details.phone} 
        label="phone" 
        changeHandler={inputConsole} 
      />
    </>
  )
}

export default App
