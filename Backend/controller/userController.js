const userModel = require('../model/userModel.js')


module.exports = {

  //Add user

  addUser: async (req, res) => {
    // const { name, email } = req.body
   const name = req.body.name
    const email = req.body.email
     const tel = req.body.tel
    try {
      user = new userModel({
        name,
        email,
        tel
      })
      await user.save() 
      res.json(user)
    }

    catch (error) {
      console.error(error.message);
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await userModel.find();
      res.json(user)
    }
    catch (error) {
      console.error(error.message);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await userModel.findByIdAndDelete(req.params.id)
      res.json(user)
    }
    catch (error) {
      console.error(error.message);
    }
  },
  updateUser: async (req, res) => {
    try {
      const user = await (userModel.findByIdAndUpdate(req.params.id, req.body, {new : true }))
      res.json(user)
    }
    catch (error) {
      console.error(error.message);
    }
  }

}