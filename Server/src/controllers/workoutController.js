const workoutServices = require("../services/workoutServices");

const getAllworkout = (req, res) => {
  const allWorkouts = workoutServices.getAllworkout();
  res.send({ status: 200, data: allWorkouts });
};

const getOneWorkout = (req, res) => {
  const workout = workoutServices.getOneWorkout();
  res.send("Get workout" + req.params.workoutId);
};

const createNewWorkout = (req, res) => {
  const { body } = req
  if (body.name || body.mode || body.equipment || body.exercises || body.trainerTip) return
  const newWorkout = {
    name: body.name, mode: body.mode, equipment: body.equipment, exercises: body.exercises, trainerTip: body.trainerTip
  }
  const createdWorkout = workoutServices.createNewWorkout(newWorkout);
  res.status(201).send({status: "OK" , data:createdWorkout});
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
