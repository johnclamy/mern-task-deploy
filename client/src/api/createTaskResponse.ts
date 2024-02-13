import fetchData from "./fetch-data";
import { END_POINT } from "./fetchTasksResponse";
import { Task } from "../models/task";

export type TaskInput = {
  title: string;
  text?: string;
};

export default async function createTaskResponse(
  task: TaskInput
): Promise<Task> {
  const res = await fetchData(END_POINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });

  return res.json();
}
