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

export default function Completed(props){
    let [list, setlist] = useState([])

    useEffect(()=>{
        setlist([...list, props.task])
    },[props.task])
    
    return(
        <div>
            <List>
                {
                    list.map((item)=>{
                        if(props.result === true){
                            return(
                                <ListItem>
                                    <TaskElement check={true} text={item}/>
                                </ListItem>
                            )
                        }
                        else{
                            return null
                        }
                    }) 
                }
            </List>
        </div>
    )
}