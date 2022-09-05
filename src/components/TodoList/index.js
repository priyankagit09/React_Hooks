import React, {useState} from 'react'

const TodoList = () => {
  
    const [list, setList]=useState([])
    const [contactList, setContact]=useState({id: "", name: ""})
    const [editingItem, setEditingItem] = useState({id: "", isEditing: false})
    const changeInput =(e) => {
        setContact({...contactList, name: e.target.value})
    }

    const handleButton =(e) => {
        e.preventDefault();
        const newTodo= {
            id: new Date().getTime().toString(),
            name: contactList.name
        }
        setList([...list, newTodo])
        setContact({id:"", name: ""})
    }

    const handleEdit =(e) => {
        e.preventDefault();
        const newTodos = list.map((eachItem) => {
            if (eachItem.id === editingItem.id) 
              {
                
                return {
                   
                    id: editingItem.id,
                    name: contactList.name
                }
                
            }

            else {
                return eachItem
            }

        }
        
        )
        setList(newTodos)
        setContact({id:"", name: ""})
        setEditingItem({id:"",isEditing: false})
    }

    const onEditButton =(id) => {
        setEditingItem({
            ...editingItem,
            id: id,
            isEditing: true,
        });



        let selectItem = list.find((each) => {
          return each.id===id
        })
         setContact({...contactList, name: selectItem.name,id: selectItem.id})
    }

    const onDeleteItem = (id) => {

        const filtered = list.filter ((eachItem) => 
        
        {
            
            return eachItem.id !==id
        })
        setList(filtered)

    }
    
    

  return (
    <div>
        <form>
        <input type="text" placeholder="enter name" value={contactList.name} onChange={changeInput}/>
        
        {editingItem.isEditing ? <button type="submit" onClick={handleEdit}>edit</button> :
        <button type="submit" onClick={handleButton}>add</button>
        
       }
        </form>
        <hr/>
        <ul>
            {list.map((eachItem) => {
                const {id, name}=eachItem
                return <li key={id}>
                    <div>
                    <span>{name}</span>
                    <button onClick={() => onEditButton(id)}>edit</button>
                    <button onClick={() => onDeleteItem(id)}>delete</button>
                    </div>
                </li>
            })}
        </ul>
    </div>
  )
}

export default TodoList