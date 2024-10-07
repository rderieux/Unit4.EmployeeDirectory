// Import express and create the express app
const express = require("express");
const app = express();

const PORT = 3000;

const employees = require("./employees");

// Middleware goes here
app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.get("/employees/random", (req, res) => {
  const randomEmployee = employees[Math.floor(Math.random() * employees.lenth)];
  res.json(randomEmployee);
});

app.get("/employees", (req, res) => {
  res.json(employees);
});

app.get("/employees/:id", (req, res) => {
  // Get the id parameter from the request
  const employeeId = parseInt(req.params.id, 10);
  // Find the employee with the matching id
  const employee = employees.find((i) => i.id === employeeId);

  if (employee) {
    res.json(employee);
  } else {
    res.status(404).send("Employee not found.");
  }
});

// Tell the app to start listening for requests
app.listen(PORT, () => {
  console.log(`Listening on port #${PORT}`);
});
