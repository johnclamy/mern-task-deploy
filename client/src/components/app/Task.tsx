import { UIEvent, useState } from "react";
import Card from "react-bootstrap/Card";
import { MdDelete, MdEditNote } from "react-icons/md";
import { Task as TaskModel } from "../../models/task";
import formatLongDate from "../../utils/format-long-date";
import UpdateTask from "./UpdateTask";

type TaskProps = {
  task: TaskModel;
  onDeleteTask: (task: TaskModel) => void;
  onUpdateTask: (task: TaskModel) => void;
};

const Task = ({ task, onDeleteTask, onUpdateTask }: TaskProps) => {
  const [showModal, setShowModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState<TaskModel | null>(null);
  const { title, text, createdAt, updatedAt } = task;

  const footNote = createdAt ? (
    <p className="text-center mb-0">Created at {formatLongDate(createdAt)}</p>
  ) : (
    <p className="text-center mb-0">Updated on {formatLongDate(updatedAt)}</p>
  );

  const handleHide = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleClick = (e: UIEvent) => {
    onDeleteTask(task);
    e.stopPropagation();
  };

  return (
    <>
      <Card className="my-1">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <h1 className="text-info mb-0 h6" title="Delete task">
            {title}
          </h1>
          <div className="d-flex">
            <MdEditNote
              style={{
                color: "black",
                cursor: "pointer",
                fontSize: "22px",
                marginLeft: "0.3rem",
              }}
              title="Edit task"
              onClick={handleShow}
            />
            <MdDelete
              style={{
                color: "red",
                cursor: "pointer",
                fontSize: "22px",
                marginLeft: "0.5rem",
              }}
              title="Delete task"
              onClick={handleClick}
            />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ fontSize: "0.75rem" }}>{footNote}</Card.Footer>
      </Card>
      <UpdateTask
        show={showModal}
        onHide={handleHide}
        onUpdate={onUpdateTask}
        taskToEdit={taskToEdit}
      />
    </>
  );
};

export default Task;
