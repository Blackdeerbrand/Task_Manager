import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

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


export default function Searchbar(props){

    const classes = useStyles();

    const AddToList = () => {
        let taskElement = document.getElementById('task').value
        props.settaskSearch(taskElement)
    }
    return(
        <div>
            <form className={classes.root}  autoComplete="off">
                <TextField id="task" label="Add Task" variant="outlined" />
                <Button onClick={()=>{AddToList()}}>Add</Button>
            </form>
        </div>
    )
}