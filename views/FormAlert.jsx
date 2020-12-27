const React = require("react");
const { Alert } = require("react-bootstrap");

const FormAlert = (props) => {
  return props.message ? (
    <Alert key={props.key} variant="danger">
      {props.message}
    </Alert>
  ) : props.successMessage ? (
    <Alert variant="success">{props.successMessage}</Alert>
  ) : null;
};

module.exports = FormAlert;
