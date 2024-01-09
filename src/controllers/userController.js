// controllers/userController.js
const People = require('../models/people')
const User = require('../models/user');



const createUser = async (req, res) => {

    const {name,username} = req.body

  try {
    const newPeople = new People({
        name,
        username
      });
      await newPeople.save();
      res.send({ message: 'Successfully Added new user', newPeople: newPeople });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};



const getAllUsers = async (req, res) => {




  try {
    const userInfo = await People.find();
    res.send(userInfo);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {

    console.log(req.params)
    const userInfoById = await People.findById({ _id: req.params.id });
    console.log(userInfoById)
    if (userInfoById) {
      res.send(userInfoById);
    } else {
      res.send({ message: 'User Not Found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const registerUser = async (req, res) => {
  const { Name, Mobile, Email, Password } = req.body;
  try {
    const findUser = await User.findOne({ Email: Email });
    if (findUser) {
      res.send({ message: 'User Already Exist' });
    } else {
      const user = new User({
        Name,
        Mobile,
        Email,
        Password,
      });
      await user.save();
      res.send({ message: 'Successfully Registered', user: user });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  const { Email,Password } = req.body;

//   console.log(email,password)

  try {
    // const query = { 'Email': email }
    const findUser = await User.findOne({Email:Email});
    console.log(findUser)
    if (findUser) {

      if (Password === findUser.Password) {
        return res.status(201).send({ message: 'Login Successful', user: findUser });
      } else {
        return res.send({ message: 'Incorrect Password' });
      }
    } 
    
    else {
      return res.status(500).send({ message: 'User Not found' });
    }
  } catch (error) {
   return  res.status(500).send({ message: error.message });
  }
};

const editUser = async (req, res) => {
  const { name,username } = req.body;
  try {
    const findUser = await People.findById({ _id: req.params.id });
    if (findUser) {
      findUser.name = name;
      findUser.username = username;
      await findUser.save();
      res.send({ message: 'Updated' });
    } else {
      res.send({ message: 'User Not Found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    await People.deleteOne({ _id: req.params.id });
    res.send({ message: 'Deleted Successfully' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  registerUser,
  loginUser,
  editUser,
  deleteUser,
  createUser
};
