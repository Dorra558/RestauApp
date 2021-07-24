const express = require('express')
const router = express.Router()
 const user = require('../controller/userController');

 router.post('/addUsers',user.addUser)
 router.get('/getUsers', user.getUser)
 router.delete('/:id', user.deleteUser)
 router.put('/:id',user.updateUser) 

 module.exports = router
