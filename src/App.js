import NewTaskForm from "./components/NewTaskForm";
import TaskCard from "./components/TaskCard";
import NewTaskBtn from "./components/buttons/NewTaskBtn";

// time_rating options: 1: 0-30 minutes, 2: 30-60 minutes, 3: 1-2 hours, 4:2-4 hours, 5:4+ hours
// frequency options: one-time, daily, weekly, bi-weekly, monthly, every _ months
const TaskList = [
  {
    id: 0,
    name: "Wash the dishes",
    frequency: "daily",
    time_rating: 1,
    assingment: null,
    unpopular: false
  }, 

  {
    id: 2,
    name: "cut the grass",
    frequency: "weekly",
    time_rating: 3,
    assingment: null,
    unpopular: false
  },

  {
    id: 3,
    name: "clean the bathrooms",
    frequency: "bi-weekly",
    time_rating: 1,
    assingment: null,
    unpopular: false
  }
];

function App() {
  const handleClick = () => {
    <NewTaskForm />
  };

  return (
    <div >
      <h1>Honey-Do List</h1>
      <NewTaskForm />
      <ul>
        {TaskList.map( task => <TaskCard task={task} key={task.id}/>)}
      </ul>
      
    </div>
  );
}

export default App;
