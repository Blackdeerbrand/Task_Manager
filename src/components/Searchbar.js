import React, {useState} from 'react'

export const Searchbar = ({saveTask}) =>{

  //Keep input data on the input
  const savedata = (e) => {
    let text = e.target.value
    if(e.keyCode == 13 || text != ""){
      saveTask({
        'text':text,
        'done':false
      })
    }
    e.target.value = "";
  }
  //Send data through the button

  const savedatafromButton = () =>{
    let text = document.querySelector('.taskcreator').value
    if(text != ""){
      saveTask({
        'text':text,
        'done':false
      })
      document.querySelector('.taskcreator').value = "";
    }
  }
  return(
    <>
      <div  id="todo-input">
        <input 
         type="text" 
         className="form-control todo-box taskcreator" 
         placeholder="Escribe una tarea..."
    
        />
        <button onClick={savedatafromButton}>Add Task</button>
      </div>
    </>
  )
}