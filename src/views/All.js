import React, {useState, useEffect, useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TaskElement from '../components/Task';
import { ListTaskContext } from '../store/task-store';

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

export default function All(props){
    let [checkedParent, setcheckedParent] = useState(false)
    let [list, setlist] = useState([])

    useEffect(()=>{
        props.checked(checkedParent)
    },[checkedParent])

    useEffect(()=>{
        setlist([...list, props.task])
    },[props.task ])

    return(
        <div>
            <List>
                {
                    list.map((item)=>{
                        return(
                            <ListItem>
                                <TaskElement check={false} text={item} checkedTask={setcheckedParent}/>
                            </ListItem>
                        )
                    }) 
                }
            </List>
        </div>
    )
}