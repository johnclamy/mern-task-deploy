import fetchData from "./fetch-data";
import { Task } from "../models/task";

const END_POINT = "/api/tasks";

export default async function fetchTasksPromise(): Promise<Task[]> {
  const res = await fetchData(END_POINT, { method: "GET" });

  return res.json();
}
