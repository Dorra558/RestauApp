const express = require('express')
const app = express()
const cors = require('cors')
const body = require('body-parser')
const db = require('./config/db.js')
db();
app.use(express.json())
const userRoute = require('./routes/userRoute')
app.use(cors())
app.use('/app/user',userRoute)

// configuration server ==> connection to server
const PORT = process.env.PORT || "4000"; 

app.listen(PORT, () => {
  console.log(`running server ${PORT}`);
});