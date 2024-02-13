import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

type CreateTaskModalProps = {
  show: boolean;
  onHide: () => void;
};

const CreateTaskModal = ({ show, onHide }: CreateTaskModalProps) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Task</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={onHide} type="button" variant="dark">
          Close
        </Button>
        <Button onClick={onHide} type="button" variant="info">
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateTaskModal;
