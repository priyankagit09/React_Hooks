import React, {useEffect, useRef, useState} from 'react'

const UseRef = () => {
  const [count, setCount] = useState("")
  const data=useRef(null)
  
  useEffect(() => {
    data.current=data.current+1
   
  })

  return (
    <div>
      <input type="text" placeholder="Enter the name" onChange={(e) =>setCount(e.target.value)}/>
      <h1>Typing :{count}</h1>
      <p>How many times render {data.current}</p>
    </div>
  )
}

export default UseRef