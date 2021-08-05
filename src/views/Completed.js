import React, {useState, useEffect} from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import '../styles/styles.css'
import Checkbox from '@material-ui/core/Checkbox';

export default function Completed(props){

    let [completedList, setCompletedList] = useState([])

    useEffect(()=>{
        setCompletedList([...completedList, props.task])
    },[])

    return(
        <>
        <h1>Completed</h1>
            {
                completedList.map((item)=>{
                    return(
                        <List>
                            <ListItem>
                            <div id="taskgeneral" className='general-box-task'>
                                <Checkbox
                                    checked={true}
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                                <p className='task-checked'>{props.text}</p>
                            </div>
                            </ListItem>
                        </List>
                    )
                })
            }
        </>
    )
}