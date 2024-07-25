import honeydew from '../assets/HoneydewIMG2.png';
import { Link } from 'react-router-dom';
import NewTaskForm from '../features/new_tasks/NewTaskForm';

const Header = () => {
    return (
        <div className="header">
            <img src={honeydew} height="50rem" />
            <h1>Honey-Do List</h1>
            <nav className='navDiv'>
                <ul className='navList'>
                    <Link to='/' className='navItem'>Home</Link>
                    <Link to='pending-tasks' className='navItem'>Pending Tasks</Link>
                    <Link to='assigned-tasks' className='navItem'>All Assigned Tasks</Link>
                </ul>
            </nav>
            <NewTaskForm />

        </div>
    )
}

export default Header