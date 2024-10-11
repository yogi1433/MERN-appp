const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/employee")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("failed");
  });

const EmployeeSchema = new mongoose.Schema({
  name: String,

  email: String,
  password: String,
});

const EmployeeModel = mongoose.model("employees", EmployeeSchema);

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("No record existed");
    }
  });
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const data = {
    name: name,
    email: email,
    password: password,
  };

  try {
    const check = await EmployeeModel.findOne({ email: email });

    if (check) {
      res.json("user already exist");
    } else {
      res.json("notexist");
      await EmployeeModel.insertMany([data]);
    }
  } catch (e) {
    res.json("fail");
  }
});

app.listen(3001, () => {
  console.log("server is running");
});
