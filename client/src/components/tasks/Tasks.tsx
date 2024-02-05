import { Task as TaskModel } from "../../models/task";
import Task from "../task/Task";

type TasksProps = {
  tasks: TaskModel[];
};

const Tasks = ({ tasks }: TasksProps) => (
  <div>
    {tasks.map((task) => (
      <Task key={task._id} task={task} />
    ))}
  </div>
);

export default Tasks;
