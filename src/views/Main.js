import React, {useEffect, useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import '../styles/styles.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import All from './All'
import Completed from './Completed'
import Active from './Active'

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


export default function TaskTabs() {
    const [value, setValue] = useState(0);
    let [checkedParent, setcheckedParent] = useState(false)
    let [task, settask] = useState('')
    let [tasklist, settasklist] = useState([])
    let [visual, setvisual] = useState(<All task={task} generallist={settasklist} checked={setcheckedParent}></All>)
    const classes = useStyles();

    const AddToList = () => {
        let taskElement = document.getElementById('task').value
        settask(taskElement)
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(value)
    };

    useEffect(()=>{
        Visual(value)   
    },[task])

    let Visual = (tabnumber) => {
        switch (tabnumber) {
            case 0:
                setvisual(<All task={task} /* generallist={settasklist} */ checked={setcheckedParent} />)
                break;
            case 1:
                setvisual(<Completed task={task} /* list={tasklist} */ result={checkedParent} />)
                break;
            case 2:
                setvisual(<Active task={task} /* list={tasklist} */ result={checkedParent} />)
                break;
            default:
                setvisual(<All task={task} generallist={settasklist} checked={setcheckedParent} />)
                break;
        }
    }

  return (
      <>
        <div className="general-box">
            <Paper square>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                    centered
                >
                    <Tab label="All" onClick={()=>{Visual(0)}} />
                    <Tab label="Completed" onClick={()=>{Visual(1)}}  />
                    <Tab label="Active" onClick={()=>{Visual(2)}} />
                </Tabs>
            </Paper>
        </div>
        <div>
            <form className={classes.root}  autoComplete="off">
                <TextField id="task" label="Add Task" variant="outlined" />
                <Button onClick={()=>{AddToList()}}>Add</Button>
            </form>
        </div>
        {visual}
    </>
  );
}