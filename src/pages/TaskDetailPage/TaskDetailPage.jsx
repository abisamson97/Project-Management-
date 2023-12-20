import {useEffect, useState} from 'react';
import * as tasksAPI from '../../utilities/tasks-api'
import { useParams, Link, useNavigate } from 'react-router-dom';
import TaskEditForm from '../../components/TaskEditForm/TaskEditForm';

export default function TaskDetailPage() {
  const [task, setTask] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getTaskDetails() {
        try {
            const taskDetails = await tasksAPI.getById(id);
            setTask(taskDetails);
        } catch (error) {
            console.error('Error fetching task details:', error);
        }
    }

    getTaskDetails();
  }, [id]);

  const handleDelete = async () => {
    try {
      await tasksAPI.deleteTask(id);
      navigate('/tasks'); 
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  if (!task) {
    return <p>No Task Info</p>;
  }

    return (
        <>
        <h2>{task.title}</h2>
        <p><strong>Description:</strong> {task.description}</p>
        <p><strong>Date Assigned:</strong> {task.dateAssigned}</p>
        <p><strong>Deadline:</strong> {task.deadline}</p>
        <p><strong>Stage:</strong> {task.stage}</p>
        
        <Link to={`/tasks/${id}/edit`}>
          <button>Edit Task</button>
        </Link>
        <button onClick={handleDelete}>Delete Task</button>
        </>
    )
  }