import Preview from "../Preview/Preview";
import PropPanel from "../PropPanel/PropPanel";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Editor.module.css";

const Editor = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={8} className={styles.preview}>
          <Preview className={styles.centereddiv} />
        </Col>
        <Col>
          <PropPanel />
        </Col>
      </Row>
    </Container>
  );
};

export default Editor;
