const express = require("express");
const db = require("./src/querries");
const bodyParser = require("body-parser");
const port = 5004;

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/v3/api/users", db.getUsers);
app.get("/v3/api/users/:id", db.getUsersById);
app.post("/v3/api/users", db.createUser);
app.put("/v3/api/users/:id", db.updateUser);
app.delete("/v3/api/users/:id", db.deleteUser);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
