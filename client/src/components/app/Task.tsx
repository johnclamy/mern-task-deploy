import Card from "react-bootstrap/Card";
import { Task as TaskModel } from "../../models/task";

type TaskProps = {
  task: TaskModel;
};

const Task = ({ task }: TaskProps) => {
  const { title, text, createdAt, updatedAt } = task;
  const footNote = createdAt ? (
    <p className="text-center mb-0">Created at {createdAt}</p>
  ) : (
    <p className="text-center mb-0">Updated on {updatedAt}</p>
  );

  return (
    <Card className="my-1">
      <Card.Header as="h5" className="text-info fw-bolder">
        {title}
      </Card.Header>
      <Card.Body>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <Card.Footer style={{ fontSize: "0.75rem" }}>{footNote}</Card.Footer>
    </Card>
  );
};

export default Task;
