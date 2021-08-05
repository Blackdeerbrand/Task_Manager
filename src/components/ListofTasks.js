import React, { useEffect, useState, useContext }  from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TaskElement from './Task';
import { ListTaskContext } from '../store/task-store';

export default function ListofTasks(props){
    let [list, setlist] = useState([])
    const {listResults, listDispatch} = useContext(ListTaskContext)

    useEffect(()=>{
        list.pop()
    },[])
    useEffect(()=>{
        setlist([...list, props.newTask])
    },[props.newTask])

    return(
        <>
        <div>
        {
            list.map((item)=>{
                return(   
                    <List>
                        <ListItem>
                            <TaskElement text={item} checked={false}/>
                        </ListItem>
                    </List>
                )
            })
        }
        </div>
        </>
    )
}