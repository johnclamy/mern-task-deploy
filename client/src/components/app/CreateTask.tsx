import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Task } from "../../models/task";
import createTaskResponse, { TaskInput } from "../../api/createTaskResponse";

type CreateTaskProps = {
  show: boolean;
  onHide: () => void;
  onSave: (task: Task) => void;
};

const CreateTask = ({ show, onHide, onSave }: CreateTaskProps) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TaskInput>();

  const onSubmit = async (input: TaskInput) => {
    try {
      const task = await createTaskResponse(input);
      onSave(task);
      reset();
      onHide();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Task</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form id="create-task-form" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a task title"
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
              placeholder="Add the task you want to do"
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
          form="create-task-form"
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

export default CreateTask;
