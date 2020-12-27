const React = require("react");
const { Button, Card, Col, Form, Row } = require("react-bootstrap");
const FormAlert = require("./FormAlert");

const App = (props) => {
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  });

  var handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="container p-5" style={{ textAlign: "-webkit-center" }}>
      <link rel="stylesheet" href="/css/bootstrap.min.css" />
      <Card
        className="p-5"
        style={{
          width: "36rem",
          textAlign: "start",
        }}
      >
        <Card.Body>
          {props.messages
            ? props.messages.map((message, idx) => {
                return <FormAlert key={idx} message={message} />;
              })
            : null}
          {props.successMessage ? (
            <FormAlert successMessage={props.successMessage} />
          ) : null}
          <Form method="POST">
            <Form.Group>
              <Row>
                <Col>
                  <Form.Control
                    placeholder="First Name"
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={(event) => handleChange(event)}
                    required
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Last Name"
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={(event) => handleChange(event)}
                    required
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group>
              <Form.Control
                placeholder="Username"
                type="text"
                name="userName"
                value={form.userName}
                onChange={(event) => handleChange(event)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                placeholder="Password"
                type="password"
                name="password"
                value={form.password}
                onChange={(event) => handleChange(event)}
                required
                aria-describedby="passwordHelpBlock"
              />
              <Form.Text id="passwordHelpBlock" muted>
                Your password must be 8 characters long, contain at least one
                upper case and one lower case letters and numbers.
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Control
                placeholder="Email"
                type="email"
                name="email"
                value={form.email}
                onChange={(event) => handleChange(event)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

module.exports = App;
