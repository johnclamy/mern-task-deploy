import { useEffect, useState } from "react";
import { Task as TaskModel } from "../models/task";
import Tasks from "../components/tasks/Tasks";

function App() {
  const END_POINT = "/api/tasks";
  const [tasks, setTasks] = useState<TaskModel[]>([]);

  const fetchTasks = async () => {
    try {
      const rslt = await fetch(END_POINT, { method: "GET" });
      const tasks = await rslt.json();
      setTasks(tasks);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
