import { useState } from 'react'
import { Button, ButtonGroup, Input, List, ListItem, ListItemButton, ListItemText, Checkbox } from '@mui/material';

export function Todoitem({completed, title, id, toggleTodo, deleteTodo}) {
   
  return (
    <ListItem id={id}>
      <div>
        <input type="checkbox" value={completed} onChange={e => toggleTodo(id, e.target.checked)}  />
        <div className="item">
          
        {/* <Checkbox value={completed} onChange={e => toggleTodo(id, e.target.checked)}  /> */}
          {title}</div>
        <Button onClick={() => deleteTodo(id)} 
          color="secondary" 
          variant="contained" 
          className='btn btn-danger' edge="end">
            Delete
        </Button>
      </div>
      <div className="clearfix"></div>
    </ListItem>
  )
}

export default Todoitem