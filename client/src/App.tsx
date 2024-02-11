import { useEffect, useState } from "react";
import { Task as TaskModel } from "./models/task";
import fetchTasksPromise from "./components/api/fetchTasksPromise";
import Tasks from "./components/app/Tasks";
import Main from "./components/layout/Main";
import TopBar from "./components/layout/TopBar";
import Footer from "./components/layout/Footer";

function App() {
  const [tasks, setTasks] = useState<TaskModel[]>([]);

  const fetchTasks = async () => {
    try {
      const tasks = await fetchTasksPromise();
      setTasks(tasks);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <section>
        <TopBar />
        <Main>
          <Tasks tasks={tasks} />
        </Main>
      </section>
      <Footer />
    </div>
  );
}

export default App;
