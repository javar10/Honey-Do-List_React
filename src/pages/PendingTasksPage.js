import { useEffect, useState } from 'react';
import axios from 'axios';

import PendingTasks from "../features/pending_tasks/PendingTasks";

const PendingTasksPage = () => {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   axios.get('http://localhost:3000/tasks')
  //     .then(response => {
  //       setData(response.data)
  //       console.log(data)
  //     })
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/tasks');
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data: ', error)
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="row">
        <PendingTasks className="col" />
      </div>
      <div>
        <h1>Data from backend:</h1>
        {data ? <p>{data[0].name}</p> : <p>Loading...</p>}
      </div >
    </>

  )
}

export default PendingTasksPage