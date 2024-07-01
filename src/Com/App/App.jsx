import initialTasks from '../../tasks.json'
import { useState } from "react";
import Form from '../Form/Form';
import Filter from '../Filter/Filter';
import TasksList from '../TaskList/TaskList';

export default function App(){
    const[tasks, setTasks]=useState(initialTasks) 
    const [filter, setFilter]= useState('')

    const addTask =(newTask)=> {
        setTasks((prevTasks)=> {
            return[...prevTasks, newTask]
        })
    }
    const deleteTask =(taskId)=> {
        setTasks(prevTasks=> {
            return prevTasks.filter(task=> task.id!==taskId)
        })

    }

    const visibleTasks = tasks.filter((task)=> task.text.toLowerCase().includes(filter.toLowerCase()))
    return(
        <>
        <Form onAdd={addTask}/>
        <Filter value={filter} onFilter={setFilter}/>
        <TasksList tasks={visibleTasks} onDelete={deleteTask}/>
        </>
    );
}