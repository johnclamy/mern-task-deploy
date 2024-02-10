import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Main = ({ children }: { children: React.ReactElement }) => {
  return (
    <Container>
      <Row>
        <Col
          xs={{ span: 12, offset: 0 }}
          md={{ span: 10, offset: 1 }}
          lg={{ span: 8, offset: 2 }}
        >
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
