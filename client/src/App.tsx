import { useEffect, useState } from "react";
import { Task as TaskModel } from "./models/task";
import fetchTasksResponse from "./api/fetchTasksResponse";
import Tasks from "./components/app/Tasks";
import CreateTask from "./components/app/CreateTask";
import Main from "./components/layout/Main";
import TopBar from "./components/layout/TopBar";
import Footer from "./components/layout/Footer";
import HeroButton from "./components/widgets/HeroButton";

function App() {
  const [tasks, setTasks] = useState<TaskModel[]>([]);
  const [showModal, setShowModal] = useState(false);

  const handleHide = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const fetchTasks = async () => {
    try {
      const tasks = await fetchTasksResponse();
      setTasks(tasks);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveTask = (task: TaskModel) => {
    setTasks([...tasks, task]);
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
          <div>
            <HeroButton onShow={handleShow}>Add a task</HeroButton>
            <CreateTask
              onSave={handleSaveTask}
              show={showModal}
              onHide={handleHide}
            />
            <Tasks tasks={tasks} />
          </div>
        </Main>
      </section>
      <Footer />
    </div>
  );
}

export default App;
