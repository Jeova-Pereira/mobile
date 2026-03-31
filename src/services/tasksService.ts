import { api } from "./api";

export async function getOneTask(id: number){
    const response = await api.get(`/tasks/${id}`)
    return response.data
} 
export async function getTask(){
    const response = await api.get("/tasks")
    return response.data
}

export async function createTask(data:{title:string; content: string}){
    const response = await api.post("/tasks", data)
    return response.data
}

export async function updateTask(id:number, data:{title?:string; content?:string}){
    const response = await api.patch(`/tasks/${id}`, data)
    return response.data
}

export async function deleteTask(id: number){
    const response = await api.delete(`/tasks/${id}`)
    return response.data
}