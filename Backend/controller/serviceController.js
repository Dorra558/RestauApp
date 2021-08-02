const Services = require('../model/serviceModel')


module.exports = {

  //Add service

  addService: async (req, res) => {
    // const { name, email } = req.body
   const nom = req.body.nom
   const imgUrl = req.body.imgUrl
   const description = req.body.description
    try {
      service = new Services({
        nom,
        imgUrl,
        description,
      })
      await service.save() 
      res.json(service)
    }

    catch (error) {
      console.error(error.message);
    }
  },
  getService: async (req, res) => {
    try {
      const service = await Services.find();
      res.json(service)
    }
    catch (error) {
      console.error(error.message);
    }
  },
  deleteService: async (req, res) => {
    try {
      const service = await Services.findByIdAndDelete(req.params.id)
      res.json(service)
    }
    catch (error) {
      console.error(error.message);
    }
  },
  updateService: async (req, res) => {
    try {
      const service = await (Services.findByIdAndUpdate(req.params.id, req.body, {new : true }))
      res.json(service)
    }
    catch (error) {
      console.error(error.message);
    }
  }

}