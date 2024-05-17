import axios from "axios";
import { CreateTaskFormValues, Task } from "../types/types";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
});

export async function getTasks(): Promise<Task[] | null> {
  try {
    const response = await api.get<Task[]>("/todos");

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// Frontend function using Axios
export async function createTask(data: Partial<Task>): Promise<Task | null> {
  try {
    const response = await api.post<Task>("/todos", { title: data.title });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export async function updateTask(
  id: string,
  data: Partial<Task>
): Promise<Task | null> {
  try {
    const response = await api.put<Task>(`/todos/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export async function deleteTask(id: string): Promise<Task | null> {
  try {
    const response = await api.delete<Task>(`/todos/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
