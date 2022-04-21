import { Container, Row, Col } from "react-bootstrap";
import styles from "./DesignPanel.module.css";

const DesignPanel = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className={styles.blue}>&#9632;</div>
        </Col>
        <Col>
          <div className={styles.blue}>&#9632;</div>
        </Col>
        <Col>
          <div className={styles.blue}>&#9632;</div>
        </Col>
        <Col>
          <div className={styles.blue}>&#9632;</div>
        </Col>
        <Col>
          <div className={styles.blue}>&#9632;</div>
        </Col>
        <Col>
          <div className={styles.blue}>&#9632;</div>
        </Col>
        <Col>
          <div className={styles.blue}>&#9632;</div>
        </Col>
      </Row>
    </Container>
  );
};

export default DesignPanel;
