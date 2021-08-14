import React, {useState, useEffect, useContext} from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import '../styles/styles.css'
import { ListTaskContext } from '../store/TaskStore';

export default function Task(props){
    const [checked, setChecked] = useState(false);
    const [task, settask] = useState()
    let [visual, setvisual] = useState('')
    let {listResults, listDispatch} = useContext(ListTaskContext)

    const handleChange = (event) => {
        setChecked(event.target.checked);
        if(checked === true){
            listDispatch({type:"CHECKED",payload:{task:props.text, checked:event.target.checked}})
        }
        else{
            listDispatch({type:"UNCHECKED",payload:{task:props.text, checked:event.target.checked}})
        }
        props.Ischecked({task:props.text, checked:checked})
    }

    useEffect(()=>{
        if(props.visual === true){
            setChecked(true)
            setvisual('task-checked')
        }
        else{
            setvisual('')
        }
    },[handleChange])

    return(
        <>           
            <div id="taskgeneral" className="general-box-task">
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