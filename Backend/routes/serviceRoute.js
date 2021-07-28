const express = require('express')
const router = express.Router()
 const service = require('../controller/serviceController');


 //routes of service
 router.post('/addServices',service.addService)
 router.get('/getServices', service.getService)
 router.delete('/:id', service.deleteService)
 router.put('/:id',service.updateService) 



 module.exports = router
