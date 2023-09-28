const Workout = require ('../database/Workout')


const getAllworkout = () => {
    const getAllworkouts = Workout.getAllworkouts
    return getAllworkouts ; 
}
const getOneWorkout = () => {return; }
const createNewWorkout = () => {return; }
const updateOneWorkout = () => {return; }
const deleteOneWorkout = () => {return; }

module.exports = { 
 getAllworkout,
 getOneWorkout,
 createNewWorkout,
 updateOneWorkout,
 deleteOneWorkout,
}