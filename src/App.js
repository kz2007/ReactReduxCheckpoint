import './App.css';
import ListTask from './ListTask';
import AddTask from './AddTask';
function App() {
  return (
    <div className="App">
      <AddTask/>
      <ListTask/>
      <footer><small>Please check the console, the state's update is happening but the Task List isn't reloading</small></footer>
     
    </div>
  );
}

export default App;
