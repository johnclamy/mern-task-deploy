import fetchData from "./fetch-data";
import { END_POINT } from "./fetchTasksResponse";

export default async function deleteTask(taskId: string) {
  await fetchData(`${END_POINT}/${taskId}`, { method: "DELETE" });
}
