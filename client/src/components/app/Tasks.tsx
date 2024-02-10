import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Task as TaskModel } from "../../models/task";
import Task from "./Task";

type TasksProps = {
  tasks: TaskModel[];
};

const Tasks = ({ tasks }: TasksProps) => (
  <Container>
    <Row xs={1} md={2} lg={3}>
      <Col>
        {tasks.map((task) => (
          <Task key={task._id} task={task} />
        ))}
      </Col>
    </Row>
  </Container>
);

export default Tasks;
