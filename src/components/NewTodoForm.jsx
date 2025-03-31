import { useState } from 'react';
import { Button, ButtonGroup, Input, List, ListItem, ListItemButton, ListItemText, Checkbox } from '@mui/material';

export function Form({onSubmit, addTodo}) {

  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    
    if(newItem === "") return
    addTodo(newItem);
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className='new-item-form'>
      <Input name='InsertItem' value={newItem} onChange={e => setNewItem(e.target.value)} 
        type="text" id="outlined-basic" label="Outlined" variant="filled" />
      <br /><br />
      <Button role='button' name='insertItem' type="submit" color="primary" variant="contained">Add</Button>
    </form>
  )
}

export default Form