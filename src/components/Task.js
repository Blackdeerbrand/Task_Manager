import React, {useState, useEffect, useContext} from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import '../styles/styles.css'
import { ListTaskContext } from '../store/task-store';

export default function TaskElement(props){
    const [checked, setChecked] = useState(false);
    let [visual, setvisual] = useState('')
    const {listResults, listDispatch} = useContext(ListTaskContext)


    useEffect(()=>{
        if(props.text === undefined){
            document.getElementById('taskgeneral').style.display = "none"
        }
    },[])

    const handleChange = (event) => {
        setChecked(event.target.checked);
        if(checked === true){
            listDispatch({type:"COMPLETED_TASKS", payload:{task:props.text}})
        }else{
            listDispatch({type:"ACTIVE_TASKS", payload:{task:props.text}})
        }
    }

    /*Visual */
    useEffect(()=>{
        if(checked === true){
            setvisual('task-checked')
        }
        else{
            setvisual('')
        }
    },[handleChange])

    return(
        <>
            <div id="taskgeneral" className='general-box-task'>
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <p className={visual}>{props.text}</p>
            </div>
        </>
    )
}