const React = require("react");
const { Button, Card, Col, Form, Row } = require("react-bootstrap");
const FormAlert = require("./FormAlert");

const FormBody = (props) => {
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
    <div className="container p-5 mt-5" style={{ textAlign: "-webkit-center" }}>
      <link rel="stylesheet" href="/css/bootstrap.min.css" />
      <Card
        className="p-5 mt-5"
        style={{
          width: "36rem",
          textAlign: "start",
          background:
            "linear-gradient(90deg, rgba(40, 40, 40, 0.5) 0%, rgba(30, 30, 30, 0.5) 30%, rgba(10, 10, 10, 0.5) 100%)",
          border: "none !important",
        }}
      >
        <Card.Body style={{ background: "rgba(255, 0, 0, 0)" }}>
          {props.messages
            ? props.messages.map((message, idx) => {
                return <FormAlert keyId={idx} message={message} />;
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
                    onChange={(event) => params.handleChange(event)}
                    required
                    style={{
                      color: "white",
                      background:
                        "linear-gradient(90deg, rgba(80, 80, 80, 0.5) 0%, rgba(40, 40, 40, 0.5) 30%, rgba(15, 15, 15, 0.5) 100%)",
                    }}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Last Name"
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={(event) => params.handleChange(event)}
                    required
                    style={{
                      color: "white",
                      background:
                        "linear-gradient(90deg, rgba(80, 80, 80, 0.5) 0%, rgba(40, 40, 40, 0.5) 30%, rgba(15, 15, 15, 0.5) 100%)",
                    }}
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
                onChange={(event) => params.handleChange(event)}
                required
                style={{
                  color: "white",
                  background:
                    "linear-gradient(90deg, rgba(80, 80, 80, 0.5) 0%, rgba(40, 40, 40, 0.5) 30%, rgba(15, 15, 15, 0.5) 100%)",
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                placeholder="Password"
                type="password"
                name="password"
                value={form.password}
                onChange={(event) => params.handleChange(event)}
                required
                aria-describedby="passwordHelpBlock"
                style={{
                  color: "white",
                  background:
                    "linear-gradient(90deg, rgba(80, 80, 80, 0.5) 0%, rgba(40, 40, 40, 0.5) 30%, rgba(15, 15, 15, 0.5) 100%)",
                }}
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
                onChange={(event) => params.handleChange(event)}
                required
                style={{
                  color: "white",
                  background:
                    "linear-gradient(90deg, rgba(80, 80, 80, 0.5) 0%, rgba(40, 40, 40, 0.5) 30%, rgba(15, 15, 15, 0.5) 100%)",
                }}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{
                color: "white",
                border: "none !important",
                background: "rgb(27, 27, 27)",
              }}
            >
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

module.exports = FormBody;
