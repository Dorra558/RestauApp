const mongoose = require('mongoose')
const db_connection = () =>{
    mongoose.connect('mongodb+srv://Restaurant:admin@cluster0.1piuh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      }
    )
 .then(() =>{ console.log('data_base connected')})
    .catch(()=>{console.log('error to connect in db')})

} 
module.exports = db_connection