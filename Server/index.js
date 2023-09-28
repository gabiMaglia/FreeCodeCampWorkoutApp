const express = require('express')
const V1Router = require('./src/V1/routes/workoutRoutes')
const server = express()
const PORT = 3001


server.use('/api/v1/workouts', V1Router);



server.listen(PORT, ()=> {
    console.log(`server run at ${PORT}`)
})