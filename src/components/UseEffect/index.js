import React, {useState, useEffect} from 'react'


const UseEffect =() => {

   const [count, setCount] =useState(0)
   const [pagewidth, setPageWidth]= useState(window.innerWidth)

   useEffect(() => {
    console.log("1.  Hi I am UseEffect, I will display when the component render for the first time and whenever page gets refresh and every time when the state value gets updated" )
})
  
   useEffect(() => {
    console.log("2. I will display only once when the component mounted bcz I have empty array dependencies")
   },[])

   useEffect(() => {
    console.log("3.  I will display when the dependencies gets changed")
   },[count])

   useEffect(() => {
    const resizeHandler= window.addEventListener("resize", () => {
        setPageWidth(window.innerWidth)
    });
     console.log("4. Hi I am 4th condition Based on Event")

     return () => {
        console.log("removing the event clean up activities before the executing useEffect, (Used when the component Un-mounted)")
        window.removeEventListener("resize", resizeHandler)
     }
   })

   const changeCount =() => {
    setCount(count+1)
   }

  return (
    <div>
        <h1>Set Count Value</h1>
        <p>Count: {count}</p>
        <p>{pagewidth}</p>
        <button onClick={changeCount}>+</button>
    </div>
  )
}

export default UseEffect