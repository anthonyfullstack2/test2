import img1 from "../Images/loginImage.jpg";
import logo from "../Images/logo-t.png";
import {
  Button,
  Container,
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Container>
        <Form>
          <Row>
            <Col md={3}>
              <img src={logo} />
            </Col>
          </Row>

          <Row>
            <Col md={3}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="Enter email..."
                  type="email"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={3}>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  placeholder="Enter Password..."
                  type="password"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={3}>
              <Button>Submit</Button>
              <p className="smalltext">
                No Account? <Link to="/register">Sign Up now.</Link>
              </p>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
