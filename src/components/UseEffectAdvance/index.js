import React, {useState, useEffect} from 'react'

const UseEffectAdvance = () => {

    const apiStatus = {
        initial : "Initial",
        success: false,
        failure: false,
        
        msg: ""
    }

    const [list, setList]= useState([])
    const [status, setStatus] = useState(apiStatus.initial)
    const [loading, setLoading] =useState(false)
   
    const apiUrl="https://jsonplaceholder.typicode.com/users"

    const getListItems = async () => {
        setLoading(true)
        try {
        const response = await fetch(apiUrl)
        if (response.ok) {
            const fetchedData = await response.json()
            setList(fetchedData)
            setLoading(false)
            setStatus({
                ...status,success: true,
            })
            
        }
        if (response.status===404) {
            setLoading(false)
            setStatus({...status,failure: true})
            
        }
        
    } 
        catch(err) {
            setLoading(false)
            setStatus({...status,failure: true})
        }
      
    }
    
    useEffect(() => {
     getListItems()
    },[])

     if (loading) {
        return (
            <div>
            <h1>Loading...</h1>
            </div>
        )

     }

     if (status.failure) {
        return (
            <div>
                <h3 style={{color: "red"}}>Something went wrong!!!</h3>
            </div>
        )
     }


  return (
    <div>
        <h1>UseEffectAdvance</h1>
        <ul>
         {
            list.map((eachItem) => {
                 const {id, name, email}=eachItem
                return <li key={id}>
                 <h1>{name}</h1>
                 <p>{email}</p>
                </li>
            })
         }
        </ul>

    </div>
  )
}

export default UseEffectAdvance