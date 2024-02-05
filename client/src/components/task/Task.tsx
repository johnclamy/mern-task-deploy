import Card from "react-bootstrap/Card";
import { Task as TaskModel } from "../../models/task";

type TaskProps = {
  task: TaskModel;
};

const Task = ({ task }: TaskProps) => {
  return (
    <Card>
      <Card.Header as="h5">{task.title}</Card.Header>
      <Card.Body>
        <Card.Text>{task.text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Task;
