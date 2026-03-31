import { useEffect, useState } from "react";
import { Task } from "../types/task";
import { getOneTask } from "../services/tasksService";

export function useTask(id:number){
    const [task, setTask] = useState<Task | null>(null)

    async function loadOneTask(){
        const data = await getOneTask(id)
        setTask(data)
    }

    useEffect(()=>{
        if(!id) return
        loadOneTask()
    }, [id])

    return{task}
}