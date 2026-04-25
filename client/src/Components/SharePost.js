import { Col, Row, Input, Button, Container } from "reactstrap";

const SharePost = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Input
            id="share"
            name="share"
            placeholder="Share your thoughts..."
            type="textarea"
          />
          <Button>PostIT</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SharePost;
