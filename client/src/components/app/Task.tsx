import Card from "react-bootstrap/Card";
import { MdDelete } from "react-icons/md";
import { Task as TaskModel } from "../../models/task";
import formatLongDate from "../../utils/format-long-date";

type TaskProps = {
  task: TaskModel;
};

const Task = ({ task }: TaskProps) => {
  const { title, text, createdAt, updatedAt } = task;
  const footNote = createdAt ? (
    <p className="text-center mb-0">Created at {formatLongDate(createdAt)}</p>
  ) : (
    <p className="text-center mb-0">Updated on {formatLongDate(updatedAt)}</p>
  );

  return (
    <Card className="my-1">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h1 className="text-info mb-0 h6" title="Delete task">
          {title}
        </h1>
        <MdDelete
          style={{
            color: "red",
            cursor: "pointer",
            fontSize: "22px",
            marginLeft: "1.2rem",
          }}
          title="Delete task"
        />
      </Card.Header>
      <Card.Body>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <Card.Footer style={{ fontSize: "0.75rem" }}>{footNote}</Card.Footer>
    </Card>
  );
};

export default Task;
