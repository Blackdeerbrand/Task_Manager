import React,{useState, useEffect} from 'react'
import { Searchbar } from '../components/Searchbar'
import { TaskList } from '../components/TaskList'
import '../styles/styles.css'

export default function TaskTabs() {

  let [tasklist, settasklist] = useState([])
  let [taskview, settaskview] = useState([])
  let [tabview, settabview] = useState('all')

  //Initialize the localstorage of the tasks
  useEffect(()=>{
    let tasks = localStorage.getItem('tasks')
    if(tasks !== null && typeof tasks !== undefined){
      settasklist(JSON.parse(tasks))
    }
    else{
      settasklist([])
    }
  },[])

  //Synchronize all the views
  useEffect(()=>{
    switch (tabview) {
      case "all":
          settaskview(tasklist)
        break;
      case "active":
          settaskview(tasklist.filter((task)=>{return task.done === false}))
        break;
      case "completed":
          settaskview(tasklist.filter((task)=>{return task.done === true}))
        break;
      default:
        break;
    }
  },[tasklist, tabview])
  //Actions of the CRUD
  const addTask = task => {
    //Add an ID for every task
    let nextTaskID = null
    if(tasklist.length > 0){
      nextTaskID = tasklist[tasklist.length - 1].id + 1
    }
    else{
      nextTaskID = tasklist.length + 1
    }
    //Create object task with an ID, text, done
    task = {...task, 'id':nextTaskID}
    settasklist([...tasklist, task])
    localStorage.setItem('tasks', JSON.stringify([...tasklist, task]));
  }

  //Delete
  const deleteTask = (id) => {
    if(id === 'all'){
      let newList = tasklist.filter((task)=>{return task.done !== true})
      settasklist(newList)
      localStorage.setItem('tasks', JSON.stringify(newList));
    }
    else{
      let newList = tasklist.filter((task)=>{return task.id !== id})
      settasklist(newList)
      localStorage.setItem('tasks', JSON.stringify(newList));
    }
  }

  //Update
  const updateTask = (id, status) => {
    let newArray = []
    tasklist.forEach((task)=>{
      if(task.id === id){
        task.done = status
      }
      newArray.push(task)
    })
    settasklist(newArray)
    localStorage.setItem('tasks', JSON.stringify(newArray));
  }

  const changeOption = (e) => {
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
  }


  return (
    <>
      <h1>Task Manager</h1>
      <div id="options">
        <div onClick={(e)=>{
          settabview('all') 
          changeOption(e)
        }} className="active" >All</div>
        <div onClick={(e)=>{
          settabview('active')
          changeOption(e)
        }}>Active</div>
        <div onClick={(e)=>{
          settabview('completed') 
          changeOption(e)
        }}>Complete</div>
      </div>
      <Searchbar saveTask={(task)=>{addTask(task)}} />
      <TaskList
        deleteTask={deleteTask}
        updateTask={updateTask}
        tabview={tabview}
        taskview={taskview}
      />
    </>
  );
}