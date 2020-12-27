const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8000;

const router = require("./routes/index");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use(express.static("views"));

app.use("/", router);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
