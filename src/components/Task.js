import React, {useState, useEffect, useContext} from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import '../styles/styles.css'
import { ListTaskContext } from '../store/task-store';

export default function TaskElement(props){
    const [checked, setChecked] = useState(false);
    let [visual, setvisual] = useState('')

    const handleChange = (event) => {
        setChecked(event.target.checked);
        props.checkedTask(event.target.checked)
        /* if(checked === true){
            listDispatch({type:"CHECKED", payload:{data:props.text}})
        }
        if(checked === false){
            listDispatch({type:"UNCHECKED", payload:{data:props.text}})
        } */
    }

    useEffect(()=>{
        if(props.check === true){
            setChecked(true)
            setvisual('task-checked')
        }
        else{
            setvisual('')
        }
    },[handleChange])

    return(
        <>
            <div id="taskgeneral">
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