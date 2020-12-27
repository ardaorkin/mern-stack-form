const express = require("express");
const router = express.Router();

const { FormModel } = require("../mongo/mongoForm");

router.get("/", (req, res) => {
  res.render("App");
});

router.post("/", async (req, res, next) => {
  const errorMessage = [];
  const FormDoc = new FormModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    password: req.body.password,
    email: req.body.email,
  })
    .save()
    .then(() => {
      return res.render("App", {
        successMessage: "User successfully created!",
      });
    })
    .catch((err) => {
      if (err.errors) {
        Object.values(err.errors).map((errorVal) =>
          errorMessage.push(errorVal.properties.message)
        );
      } else {
        if (err.keyValue.userName) {
          errorMessage.push(
            `User name ${err.keyValue.userName} has already taken`
          );
        } else if (err.keyValue.email) {
          errorMessage.push(
            `An account with ${err.keyValue.email} email address already exists.`
          );
        }
      }
      return res.render("App", { messages: errorMessage });
    });
});

module.exports = router;
