import React, {useReducer} from 'react'



const reducer =(state, action) => {
   switch (action.type) {
     case "reset": 
     return {count: 0};
     case "Increment":
      return {count: state.count+action.payload };
      case "Decrement":
        return {count: state.count -action.payload};

       default: 
       return state; 

   }

}



const UseReducer = () => {
  const initial={
    count: 0
  }

  const [state, dispatch]= useReducer(reducer,  initial)
  const increment =() => {
    dispatch( {
      type: "Increment",

      payload: 1}
    )

  }
   
  const decrement =() => {
    dispatch( {
      type: "Decrement",
      payload: 1
    }
     )
  }
  const reset =() => {
    dispatch( {
      type: "reset",
      payload: 0
     
  })
  }

  return (
    <div>
     
      <button onClick= {increment}>Increment</button>
      <span>Count: {state.count}</span>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      
    </div>
  )
}   

export default UseReducer