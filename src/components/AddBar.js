import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import ListofTasks from './ListofTasks';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      display: 'inline-flex',
      alignItems: 'center'
    },
  },
}));

export default function Addbar(props){

    let [task, settask] = useState()

    const AddToList = () => {
        let taskElement = document.getElementById('task').value
        settask(taskElement)
    }

    const classes = useStyles();
    return(
        <div>
            <form className={classes.root}  autoComplete="off">
                <TextField id="task" label="Add Task" variant="outlined" />
                <Button onClick={()=>{AddToList()}}>Add</Button>
            </form>
                <ListofTasks newTask={task}/>
        </div>
    
    )
}