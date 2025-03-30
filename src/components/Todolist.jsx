import { useState } from 'react'
import { Todoitem } from './Todoitem';
import { List } from '@mui/material';

export function Formlist({ todos, toggleTodo, deleteTodo }) {
    //const [dense, setDense] = useState(false);
  return (
    <>
        {todos.length === 0 && <p>No items in the list</p>}
        <List>
            
            {todos.map(todo => {
                return (
                <Todoitem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                )
            }
            )} 
        </List>
    </>
  )
}

export default Formlist