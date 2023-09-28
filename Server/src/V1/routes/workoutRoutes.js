const express = require ('express')
const router = express.Router()
const {
    getAllworkout,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
} = require('../../controllers/workoutController')
router
    .get('/', getAllworkout )
    .get('/:workoutId', getOneWorkout)
    .post('/:workoutId',createNewWorkout)
    .patch('/:workoutId',updateOneWorkout)
    .delete('/:workoutId',deleteOneWorkout);

module.exports = router