import { Task } from "../models/task";
import fetchData from "./fetch-data";
import { END_POINT } from "./fetchTasksResponse";
import { TaskInput } from "./createTaskResponse";

export default async function updateTaskResponse(
  taskId: string,
  task: TaskInput
): Promise<Task> {
  const res = await fetchData(`${END_POINT}/${taskId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });

  return res.json();
}
