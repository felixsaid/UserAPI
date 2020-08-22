const pool = require("./db");
const status = require("./helpers/status");

//get all users

const getUsers = async (req, res) => {
  try {
    const all_users = await pool.query("SELECT * FROM users");
    const res_all_users = all_users.rows;

    status.successMessage.data = res_all_users;

    res.status(status.status.success).json(status.successMessage);
  } catch (err) {
    console.error(err.message);
  }
};

//get users by id

const getUsersById = async (req, res) => {
  try {
    const { id } = req.params;

    const get_user_by_id = await pool.query(
      "SELECT * FROM users WHERE user_id = $1",
      [id]
    );

    const res_user_by_id = get_user_by_id.rows[0];
    status.successMessage.data = res_user_by_id;

    res.status(status.status.success).json(status.successMessage);
  } catch (err) {
    console.error(err.message);
  }
};

//create user

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const create_user = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, password]
    );

    const res_created_user = create_user.rows[0];
    status.successMessage.data = res_created_user;

    res.status(status.status.created).json(status.successMessage);
  } catch (err) {
    console.error(err.message);
  }
};

//update user

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;

    console.log(req.body);
    console.log(req.params);

    const update_user = await pool.query(
      "UPDATE users SET name = $1, email = $2, password = $3 WHERE user_id = $4",
      [name, email, password, id]
    );

    res.status(200).send(`User with id ${id} was modified!`);
  } catch (err) {
    console.error(err.message);
  }
};

//delete user

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const delete_user = await pool.query(
      "DELETE FROM users WHERE user_id = $1",
      [id]
    );

    res.status(200).send(`User with id ${id} was successfully deleted!`);
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  getUsers,
  getUsersById,
  createUser,
  updateUser,
  deleteUser,
};
