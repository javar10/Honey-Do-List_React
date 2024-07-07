import { Route, Routes } from 'react-router-dom';
import './App.css';
import honeydew from '../src/assets/HoneydewIMG2.png';
import HomePage from './pages/HomePage';
import AssignedTasks from './features/assigned_tasks/AssignedTasks';

function App() {

  return (
   
    <div className="app">
      <div className="header">  
        <img src={honeydew} height="50rem" />
        <h1>Honey-Do List</h1>
      </div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/assigned-tasks' element={<AssignedTasks />} /> */}
        {/* <Route path='/assigned-tasks/:user' element={<AssignedTasks />} /> */}
      </Routes>
    </div>


  );
}

export default App;
