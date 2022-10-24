
import './App.css';
import ToDoList from './components/ToDoList';
import { Provider } from './store';


function App() {
  return <>
  <div>
    <Provider>
      <ToDoList/>
    </Provider>
  </div>
  </>
  
}

export default App;
