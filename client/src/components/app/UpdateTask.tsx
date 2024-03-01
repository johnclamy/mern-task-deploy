import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Task } from "../../models/task";
import { TaskInput } from "../../api/createTaskResponse";
import updateTaskResponse from "../../api/updateTaskResponse";

type UpdateTaskProps = {
  show: boolean;
  onHide: () => void;
  taskToEdit: Task | null;
  onUpdate: (task: Task) => void;
};

const UpdateTask = ({
  show,
  onHide,
  taskToEdit,
  onUpdate,
}: UpdateTaskProps) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TaskInput>();

  const onSubmit = async (input: TaskInput) => {
    try {
      if (taskToEdit) {
        const task = await updateTaskResponse(taskToEdit._id, input);
        onUpdate(task);
        reset();
        onHide();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Update Task</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form id="update-task-form" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Edit the task title"
              isInvalid={!!errors.title}
              {...register("title", { required: "required" })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.title?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Task</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Edit the task text"
              {...register("text")}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} type="button" variant="dark">
          Close
        </Button>
        <Button
          form="update-task-form"
          type="submit"
          variant="info"
          disabled={isSubmitting}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateTask;
