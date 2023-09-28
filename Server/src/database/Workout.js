const db = require('./db.json')

const getAllworkouts = () => {
    console.log(db.workouts)
    return db.workouts
}

module.exports = {getAllworkouts}