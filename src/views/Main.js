import React, {useEffect, useState, useMemo, useContext} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Searchbar from '../components/Searchbar';
import Task from '../components/Task';
import { ListTaskContext } from '../store/TaskStore';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TaskTabs() {
  const [value, setValue] = useState(0);
  let [taskSearch, settaskSearch] = useState()
  let [taskChecked, settaskChecked] = useState(false)
  let [actualtask, setactualtask] = useState({
        task:'',
        checked: false
  })
  let [taskList, settaskList] = useState([])
  let {listResults, listDispatch} = useContext(ListTaskContext)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(()=>{
    settaskList([...taskList, taskSearch])
  },[taskSearch])

  useEffect(()=>{
    console.log(listResults)
  },[value])
  return (
    <div>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Active" {...a11yProps(1)} />
          <Tab label="Completed" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Searchbar settaskSearch={settaskSearch}/>
        {
            taskList.map((item)=>{
                if(item === '' || item === undefined){
                    return null
                }
                else{
                    return(
                        <Task text={item} Ischecked={setactualtask}></Task>
                    )
                }
            })
        }
      </TabPanel>
      <TabPanel value={value} index={1}>
        {
            taskList.map((item)=>{
                if(item === '' || item === undefined){
                    return null
                }
                else{
                    return(
                        <>  
                        {
                            actualtask.checked === false ?
                            <Task text={item} visual={false}></Task>
                            :
                            null
                        }
                            {/* <Task text={item}></Task> */}
                        </>
                    )
                }
            })
        }
      </TabPanel>
      <TabPanel value={value} index={2}>
        {
            taskList.map((item)=>{
                if(item === '' || item === undefined){
                    return null
                }
                else{
                    return(
                        <>     
                        {
                            actualtask.checked === true ?
                            <Task text={item} visual={true}></Task>
                            :
                            null
                        }      
                            {/* <Task text={item}></Task> */}
                        </>
                    )
                }
            })
        }
      </TabPanel>
    </div>
  );
}