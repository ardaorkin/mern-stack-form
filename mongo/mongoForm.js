const mongoose = require("mongoose");
const db = require("./mongoConnection");

const validators = {
  email: {
    validator: (emailInput) => {
      return /\S+@\S+\.\S+/.test(emailInput);
    },
    message: (props) => `${props.value} is not a valid email`,
  },
  password: [
    {
      validator: (upperCaseInput) => {
        return /[A-Z]/.test(upperCaseInput);
      },
      message: () => `Password must have at least one upper case character.`,
    },
    {
      validator: (lowerCaseInput) => {
        return /[a-z]/.test(lowerCaseInput);
      },
      message: () => `Password must have at least one lower case character.`,
    },
    {
      validator: (numberInput) => {
        return /[0-9]/.test(numberInput);
      },
      message: () => `Password must have at least one number.`,
    },
    {
      validator: (lengthInput) => {
        return /.{8}/.test(lengthInput);
      },
      message: () => `Password must be 7 characters long.`,
    },
  ],
};

module.exports.FormSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name required"],
  },
  lastName: {
    type: String,
    required: [true, "Last name required"],
  },
  userName: {
    type: String,
    required: [true, "User name required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password required"],
    validate: validators.password,
  },
  email: {
    type: String,
    validate: validators.email,
    unique: true,
  },
});

module.exports.FormModel = mongoose.model("FormModel", exports.FormSchema);
