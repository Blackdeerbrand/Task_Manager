import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export const TaskList = ({deleteTask, updateTask, tabview, taskview}) => {

    //Updating any task from checked to unchecked
    const changeStatus = (index, e) => {
        updateTask(index, e.target.checked)
    }

    //Verify the possible results for the props 
    if(taskview === null){
        taskview = [];
    }

    return(
        <>
            <div>
                {
                    taskview !== null &&
                    taskview.map((task)=>{
                        return(
                            <>
                                <div className="task-checkbox" key={task.id}>
                                    <div style={{display:'inline-flex', alignItems:"center"}}>
                                        <input type="checkbox"
                                        className="check form-control"
                                        name={"check" + task.id} 
                                        id={"check" + task.id}
                                        defaultChecked={task.done}
                                        onClick={(e) => changeStatus(task.id, e)}/>
                                        <p>{task.text}</p>
                                    </div>
                                    
                                    {task.done == true && tabview == 'completed' && 
                                        <DeleteIcon onClick={() => deleteTask(task.id)}/>
                                    }
                                </div>
                            </>
                        )
                    })
                }
                {taskview > 0 && tabview === 'completed' && 
                    <button>
                        <DeleteForeverIcon onClick={() => deleteTask('all')}/>
                    </button>
                }
            </div>
        </>
    )
}