import fetchData from "./fetch-data";
import { Task } from "../models/task";

export const END_POINT = "/api/tasks";

export default async function fetchTasksResponse(): Promise<Task[]> {
  const res = await fetchData(END_POINT, { method: "GET" });

  return res.json();
}
