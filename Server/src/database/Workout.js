const DB = require('./db.json')
const { saveToDatabase } = require ("./utils")

const getAllworkouts = () => {
    console.log(DB.workouts)
    return DB.workouts
}

const createNewWorkout = (newWorkout) => {
    const isAlreadyAdded = DB.workouts.findIndex(workout => workout.name === newWorkout)
    
    if (isAlreadyAdded) return

    else DB.workouts.push(newWorkout)
    saveToDatabase(DB)

}

module.exports = {getAllworkouts, createNewWorkout}