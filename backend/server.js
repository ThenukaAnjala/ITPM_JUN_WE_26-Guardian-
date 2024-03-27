require('dotenv').config(); //require and directly invoke the config method
const express = require('express')
const mongose = require('mongoose')
const userReg = require('./routes/UserAuthRoutes')

//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next)=> {
    console.log(req.path, req.method)
    next()
})
//routes
app.use('/api/userReg',userReg)
//app.use('/api/guardian' ,exampleRoute)

//connect to db
mongose.connect(process.env.MONGO_URI)
  .then(()=>{
    //listen for requests
    app.listen(process.env.PORT, () => {
    console.log('connect to the db & listening on port ',process.env.PORT)
})
  })
  .catch((error)=>{
    console.log(error)
  })

