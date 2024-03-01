import { useEffect, useState } from "react";
import { Task as TaskModel } from "./models/task";
import deleteTask from "./api/deleteTask";
import fetchTasksResponse from "./api/fetchTasksResponse";
import Tasks from "./components/app/Tasks";
import CreateTask from "./components/app/CreateTask";
import Main from "./components/layout/Main";
import TopBar from "./components/layout/TopBar";
import Footer from "./components/layout/Footer";
import HeroButton from "./components/widgets/HeroButton";
import AddIcon from "./components/widgets/AddIcon";

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

  const handleUpdateTask = () => {};

  const handleDeleteTask = async (task: TaskModel) => {
    const taskId = task._id;
    try {
      await deleteTask(taskId);
      const newTasks = tasks.filter(
        (currentTask) => currentTask._id !== taskId
      );
      setTasks(newTasks);
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
          <div>
            <HeroButton onShow={handleShow}>
              <span className="d-flex align-items-center justify-content-center">
                <AddIcon />
                <i>Add a task</i>
              </span>
            </HeroButton>
            <CreateTask
              onSave={handleSaveTask}
              show={showModal}
              onHide={handleHide}
            />
            <Tasks
              tasks={tasks}
              onDeleteTask={handleDeleteTask}
              onUpdateTask={handleUpdateTask}
            />
          </div>
        </Main>
      </section>
      <Footer />
    </div>
  );
}

export default App;
