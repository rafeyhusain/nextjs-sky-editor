import Preview from "../Preview/Preview";
import PropPanel from "../PropPanel/PropPanel";
import { Container, Row, Col } from "react-bootstrap";

const Editor = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Preview />
        </Col>
        <Col>
          <PropPanel />
        </Col>
      </Row>
    </Container>
  );
};

export default Editor;
