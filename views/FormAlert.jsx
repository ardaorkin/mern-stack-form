const React = require("react");
const { Alert } = require("react-bootstrap");

const FormAlert = (props) => {
  return (
    <Alert variant="danger">
      <li>{props.message}</li>
    </Alert>
  );
};

module.exports = FormAlert;
