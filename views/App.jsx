const React = require("react");
const FormBody = require("./FormBody");

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
    <>
      <link rel="stylesheet" href="/css/App.css"></link>
      <FormBody
        handleChange={handleChange}
        messages={props.messages}
        successMessage={props.successMessage}
      />
    </>
  );
};

module.exports = App;
