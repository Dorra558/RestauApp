const Commands = require('../model/commandModel')


module.exports = {

  //Add command

  addCommand: async (req, res) => {
    // const { name, email } = req.body
   const nom = req.body.nom
    const typePayment = req.body.typePayment

    try {
      command = new Commands({
        nom,
        typePayment
      })
      await command.save() 
      res.json(command)
    }

    catch (error) {
      console.error(error.message);
    }
  },
    getCommand: async (req, res) => {
        try {
            const command = await Commands.find();
            res.json(command)
        }
        catch (error) {
            console.error(error.message)
        }
    },
  deleteCommand: async (req, res) => {
    try {
      const command = await Commands.findByIdAndDelete(req.params.id)
      res.json(command)
    }
    catch (error) {
      console.error(error.message);
    }
  },
  updateCommand: async (req, res) => {
    try {
      const command = await (Commands.findByIdAndUpdate(req.params.id, req.body, {new : true }))
      res.json(command)
    }
    catch (error) {
      console.error(error.message);
    }
  }

}