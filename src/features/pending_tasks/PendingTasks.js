import { useSelector } from "react-redux";
import AssignTaskBtn from "./AssignTaskBtn";
import { displayTasks } from "../new_tasks/newTaskSlice";
import { useEffect, useState } from 'react';
import axios from 'axios';

function PendingTasks() {
    // const taskList = useSelector(displayTasks);
    // console.log(JSON.stringify(taskList, null, 2));

    const [taskList, setTaskList] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get('http://localhost:3000/tasks');
              setTaskList(response.data);
              console.log(taskList);
            } catch (error) {
              console.error('Error fetching data: ', error)
            }
          }
          fetchData();
    }, []);

    return (
        <>
            <h2 key='pendingTasks'>Pending Tasks</h2>
            {taskList ? 
             <ul>
                {taskList.map(task => {
                    if (task.assignedTo === 'Pending') {
                        return (
                            <div key={task.id} className="pending-tasks-div">
                                <li className="list-group-item">
                                    <h4 className="task-name">{task.name}</h4>
                                    <p>{task.frequency}</p>
                                    {/* <p>Due by: {task.dueDate}</p> */}
                                    <AssignTaskBtn className="assign-task-btn" task={task} />
                                </li>

                            </div>
                        )
                    }
                    // } else {
                    //     // return <></>
                    //     return <p>No Tasks from Task List</p>
                    // }

                })}
            </ul>
        : <p>No Tasks</p>    
        }

        </>
    );
}

export default PendingTasks;