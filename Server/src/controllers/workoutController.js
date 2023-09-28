const workoutServices = require("../services/workoutServices");

const getAllworkout = (req, res) => {
  const allWorkouts = workoutServices.getAllworkout();
  res.send({status: 200, data: allWorkouts});
};

const getOneWorkout = (req, res) => {
  const workout = workoutServices.getOneWorkout();
  res.send("Get workout" + req.params.workoutId);
};

const createNewWorkout = (req, res) => {
  const newWorkout = workoutServices.createNewWorkout();
  res.send("Create workout");
};

const updateOneWorkout = (req, res) => {
  const modifiedWorkout = workoutServices.updateOneWorkout();
  res.send("Edit Workout");
};

const deleteOneWorkout = (req, res) => {             
  workoutServices.deleteOneWorkout();
  res.send("Delete workout");
};

module.exports = {
  getAllworkout,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
