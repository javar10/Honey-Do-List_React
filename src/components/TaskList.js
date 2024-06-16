import TaskListItem from "./TaskListItem";

function TaskList({taskList}) {
    return (
        <ul>
        {taskList.map( task => <TaskListItem task={task}/>)} 
      </ul>
    );
}

export default TaskList;
