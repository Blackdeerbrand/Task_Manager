import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Addbar from '../components/AddBar';
import '../styles/styles.css'
import ListofTasks from '../components/ListofTasks';

import Completed from '../views/Completed';
import Active from '../views/Active';

function All(){
    return(
        <Addbar/>
    )
}
export default function TaskTabs() {
  const [value, setValue] = useState(0);
  let [tasklist, settasklist] = useState(<All/>) 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const setListofTasks = (tabnumber) => {
    switch (tabnumber) {
        case 1:
            settasklist(<All/>)
            break;
        case 2:
            settasklist(<Active/>)
            break;
        case 3:
            settasklist(<Completed/>)
            break;
        default:
            settasklist(<All/>)
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
                    <Tab label="All" onClick={()=>{setListofTasks(1)}} />
                    <Tab label="Active" onClick={()=>{setListofTasks(2)}}  />
                    <Tab label="Completed" onClick={()=>{setListofTasks(3)}}  />
                </Tabs>
            </Paper>
        {tasklist}
        </div>
    </>
  );
}