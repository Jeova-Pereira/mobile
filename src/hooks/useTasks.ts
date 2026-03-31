import { useEffect, useState } from "react";
import { createTask, deleteTask, getOneTask, getTask, updateTask } from "../services/tasksService";
import { Task } from "../types/task";

export function useTasks(){
    const [tasks, setTasks] = useState<Task[]>([])


    async function loadTasks(){
        const data = await getTask()
        setTasks(data)
    }

    async function addTask(title: string, content: string){
        const newTask = await createTask({title, content})
        setTasks((prev) => [...prev, newTask])
    }

    async function editTask(id: number, data: Partial<Task>){
        const updated = await updateTask(id, data)
        setTasks((prev) => prev.map((task) => (task.id === id ? updated: task)))
    }

    async function removeTask(id: number){
        await deleteTask(id)
        setTasks((prev) => prev.filter((task)=> task.id !== id))
    }

    useEffect(()=> {
        loadTasks()
    }, [])

    return{
        tasks, loadTasks, addTask, editTask, removeTask
    }
}