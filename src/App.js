import logo from './logo.svg';
import './App.css';
import TaskTabs from './views/Main'
import { ListStatus } from './store/TaskStore';

function App() {
  return (
    <ListStatus>
      <TaskTabs/>
    </ListStatus>
  );
}

export default App;
