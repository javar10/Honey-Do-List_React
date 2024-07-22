import { Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import PendingTasksPage from './pages/PendingTasksPage';
import AssignedTasksPage from './pages/AssignedTasksPage';
import UsersTasksPage from './pages/UsersTasksPage';
import { useState } from 'react';
import Header from './components/Header';

function App() {
  const [user, setUser] = useState('');

  return (

    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/pending-tasks' element={<PendingTasksPage />} />
        <Route path='/assigned-tasks' element={<AssignedTasksPage />} />
        <Route path='/assigned-tasks/:user' element={<UsersTasksPage user={user} />} />

      </Routes>
    </div>


  );
}

export default App;
