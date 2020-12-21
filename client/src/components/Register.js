import { useState, useContext } from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";
// import { useHistory } from "react-router-dom";

export default (props) => {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123456");
  const [passwordConfirmation, setPasswordConfirmation] = useState("123456");

  const { handleRegister } = useContext(AuthContext);

  // const auth = useContext(AuthContext);
  // const { handleLogin } = useContext(AuthContext);

  const handleSubmit = () => {
    // frontend check
    if (password === passwordConfirmation) {
      handleRegister({ email, password }, props.history);
    } else {
      alert("passwords don't match");
    }
  };
  return (
    <>
      <Segment>
        <Header as="h1" textAlign="center">
          Register
        </Header>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            required
            autoFocus
            name="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Input>
          <Form.Input
            required
            name="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Input>
          <Form.Input
            required
            name="passwordConfirmation"
            label="Confirm Password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          ></Form.Input>
          <Segment textAlign="center" basic>
            <Button type="submit">Register</Button>
          </Segment>
        </Form>
      </Segment>
    </>
  );
};
